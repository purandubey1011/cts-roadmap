const jwt = require("jsonwebtoken");
const ErrorHandler = require("../utils/ErrorHandler");
const { catchAsyncErrors } = require("./catchAsyncErrors");
const User = require("../models/user.schema");

exports.isAuthenticated = catchAsyncErrors(async (req, res, next) => {

    console.log('is auth chala :', req.cookies);

  const token = req.cookies.token;

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided. please login" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('decode id :',decoded,decoded.id);
    const user = await User.findById(decoded.id);
    req.id = decoded.id;
    req.user = user;
    next();
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Invalid token.", error: error.message });
  }
});
