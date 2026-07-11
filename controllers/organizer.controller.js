const mongoose = require("mongoose");
const Event = require("../models/event.model");
const Reservation = require("../models/reservation.model");
const User = require("../models/user.model");
const appError = require("../utils/appError");
const httpStatusText = require("../utils/httpStatusText");
const userRoles = require("../utils/userRole");
const attendanceStatus = require("../utils/attendanceStatus");

const isEventOwnedByOrganizer = async (currentUser, eventId) => {
  if (!mongoose.Types.ObjectId.isValid(eventId)) {
    return false;
  }

  const event = await Event.findById(eventId).select("organizerId");
  if (!event) {
    return false;
  }

  return (
    currentUser.role === userRoles.ADMINISTRATOR ||
    event.organizerId.equals(currentUser.id || currentUser._id)
  );
};

exports.getRegistrationsForEvent = async (req, res, next) => {
  try {
    const { eventId } = req.params;

    const event = await Event.findById(eventId);
    if (!event) {
      const error = appError.create(
        "Event not found",
        404,
        httpStatusText.ERROR,
      );
      return next(error);
    }

    if (!(await isEventOwnedByOrganizer(req.currentUser, eventId))) {
      const error = appError.create(
        "You are not assigned to this event",
        403,
        httpStatusText.ERROR,
      );
      return next(error);
    }

    const registrations = await Reservation.find({ eventId })
      .populate("userId", "fullName email status")
      .populate("eventId", "title startDateTime endDateTime")
      .sort("-createdAt");

    return res.status(200).json({
      status: httpStatusText.SUCCESS,
      message: "Event registrations retrieved successfully",
      total: registrations.length,
      data: registrations,
    });
  } catch (error) {
    next(error);
  }
};

exports.patchRegistrationForEvent = async (req, res, next) => {
  try {
    const { eventId } = req.params;
    const {
      reservationId,
      userId,
      status,
      paymentStatus,
      attendanceStatus: attendance,
    } = req.body;

    if (!reservationId && !userId) {
      const error = appError.create(
        "reservationId or userId is required",
        400,
        httpStatusText.ERROR,
      );
      return next(error);
    }

    if (!(await isEventOwnedByOrganizer(req.currentUser, eventId))) {
      const error = appError.create(
        "You are not assigned to this event",
        403,
        httpStatusText.ERROR,
      );
      return next(error);
    }

    const reservation = reservationId
      ? await Reservation.findById(reservationId)
      : await Reservation.findOne({ eventId, userId });

    if (!reservation) {
      const error = appError.create(
        "Reservation not found",
        404,
        httpStatusText.ERROR,
      );
      return next(error);
    }

    if (reservation.eventId.toString() !== eventId.toString()) {
      const error = appError.create(
        "Reservation does not belong to this event",
        400,
        httpStatusText.ERROR,
      );
      return next(error);
    }

    if (status) reservation.status = status;
    if (paymentStatus) reservation.paymentStatus = paymentStatus;
    if (attendance) {
      if (!Object.values(attendanceStatus).includes(attendance)) {
        const error = appError.create(
          "Invalid attendance status",
          400,
          httpStatusText.ERROR,
        );
        return next(error);
      }
      reservation.attendanceStatus = attendance;
    }

    await reservation.save();

    return res.status(200).json({
      status: httpStatusText.SUCCESS,
      message: "Reservation updated successfully",
      data: reservation,
    });
  } catch (error) {
    next(error);
  }
};

exports.getAllAttendees = async (req, res, next) => {
  try {
    const attendees = await User.find({ role: userRoles.ATTENDEE }).select(
      "fullName email status createdAt",
    );

    return res.status(200).json({
      status: httpStatusText.SUCCESS,
      message: "Attendee list retrieved successfully",
      total: attendees.length,
      data: attendees,
    });
  } catch (error) {
    next(error);
  }
};

exports.patchAttendeeReservation = async (req, res, next) => {
  try {
    const {
      reservationId,
      eventId,
      userId,
      status,
      paymentStatus,
      attendanceStatus: attendance,
    } = req.body;

    if (!reservationId && !(eventId && userId)) {
      const error = appError.create(
        "reservationId or eventId and userId are required",
        400,
        httpStatusText.ERROR,
      );
      return next(error);
    }

    const reservation = reservationId
      ? await Reservation.findById(reservationId)
      : await Reservation.findOne({ eventId, userId });

    if (!reservation) {
      const error = appError.create(
        "Reservation not found",
        404,
        httpStatusText.ERROR,
      );
      return next(error);
    }

    if (
      !(await isEventOwnedByOrganizer(req.currentUser, reservation.eventId))
    ) {
      const error = appError.create(
        "You are not assigned to this event",
        403,
        httpStatusText.ERROR,
      );
      return next(error);
    }

    if (status) reservation.status = status;
    if (paymentStatus) reservation.paymentStatus = paymentStatus;
    if (attendance) {
      if (!Object.values(attendanceStatus).includes(attendance)) {
        const error = appError.create(
          "Invalid attendance status",
          400,
          httpStatusText.ERROR,
        );
        return next(error);
      }
      reservation.attendanceStatus = attendance;
    }

    await reservation.save();

    return res.status(200).json({
      status: httpStatusText.SUCCESS,
      message: "Reservation updated successfully",
      data: reservation,
    });
  } catch (error) {
    next(error);
  }
};
