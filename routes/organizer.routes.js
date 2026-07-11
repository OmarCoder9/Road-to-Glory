const express = require("express");
const verifyToken = require("../middlewares/verifyToken");
const organizerController = require("../controllers/organizer.controller");
const router = express.Router();
const allowedTo = require("../middlewares/allowedTo");
const userRoles = require("../utils/userRole");

router.use(
  verifyToken,
  allowedTo(userRoles.ORGANIZER, userRoles.ADMINISTRATOR),
);

router
  .route("/:eventId")
  .get(organizerController.getRegistrationsForEvent)
  .patch(organizerController.patchRegistrationForEvent);

router
  .route("/")
  .get(organizerController.getAllAttendees)
  .patch(organizerController.patchAttendeeReservation);

module.exports = router;
