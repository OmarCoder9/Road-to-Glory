const appError = require("../utils/appError");
const httpStatusText = require("../utils/httpStatusText");

const allowedTo = (...roles) => {
  return (req, res, next) => {
  
    if (!req.currentUser) {
      return next(
        appError.create(
          "You are not logged in. Please log in to get access",
          401,
          httpStatusText.FAIL
        )
      );
    }

  
    if (!roles.includes(req.currentUser.role)) {
      return next(
        appError.create(
          "You do not have permission to perform this action",
          403,
          httpStatusText.ERROR
        )
      );
    }

    next();
  };
};

module.exports = allowedTo;
