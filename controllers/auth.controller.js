const User = require("../models/user.model");
const appError = require("../utils/appError");
const httpStatusText = require("../utils/httpStatusText");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res, next) => {
  try {
    const { fullName, email, password, role } = req.body;
    
    const existingUser = await User.findOne({ email });
    if (existingUser) return next(appError.create("Email already exists", 400, httpStatusText.ERROR));

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ fullName, email, password: hashedPassword, role: role || "ATTENDEE" });
    
    newUser.password = undefined;
    return res.status(201).json({ status: httpStatusText.SUCCESS, data: { user: newUser } });
  } catch (error) { next(error); }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });
    if (!user) return next(appError.create("Invalid email or password", 401, httpStatusText.FAIL));

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return next(appError.create("Invalid email or password", 401, httpStatusText.FAIL));

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });
    
    return res.status(200).json({ status: httpStatusText.SUCCESS, data: { token } });
  } catch (error) { next(error); }
};