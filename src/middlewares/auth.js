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
    console.log('decoded user wala user:',user);
    if (!user) {
        return res
            .status(404)
            .json({ message: "User not found. Please login again." });
    }
    req.id = decoded.id;
    req.user = user;
    console.log('bs next chala ab');
    next();
  } catch (error) {
    console.log('error aya is auth:',error.message);
    return res
      .status(400)
      .json({ message: "Invalid token.", error: error.message });
  }
});
