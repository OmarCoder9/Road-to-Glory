const asyncWrapper = require("../utils/asyncWrapper"); 

exports.getAvailableEvents = asyncWrapper(async (req, res, next) => {
  const events = await Event.find({
    isApproved: true,
    status: eventStatus.PUBLISHED,
  }).populate("organizerId", "fullName email");

  return res.status(200).json({
    status: httpStatusText.SUCCESS,
    message: "Available events retrieved successfully",
    total: events.length,
    data: events,
  });
});

exports.reserveEvent = asyncWrapper(async (req, res, next) => {
  
});