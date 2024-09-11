const { getiplocation } = require("../utils/getiplocation.js");

exports.sendtoken = async (user, statuscode, res) => {

    await getiplocation(user);

    let token = user.getjwttoken();

    // let options = {
    //     expires: new Date(
    //         Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    //     ),
    //     httpOnly: true,
    //     secure: process.env.NODE_ENV === 'production', // Set to true in production
    //     sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax', // 'None' for production, 'Lax' for development
    // };

    res.status(statuscode)
        .cookie("token", token, {
            httpOnly: true,
            secure: true, // Use secure cookies in production
            sameSite: 'strict', // Prevent CSRF attacks
            maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
          })
        .json({
            success: true,
            id: user._id,
            token
        });
};