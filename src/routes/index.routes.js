let express = require("express");
const {
    homepage,
    signup,
    signin,
    signout,
    currentuser,
    edituser,
    resetpassword,
    usersendmail,
    userforgetlink,
    studentavatar,
    deleteuser,
    addEducation,
    addAchievement,
    updateSocialMedia,
    showportfolio,
    submit_ivy_form,
    allexams
} = require("../controllers/index.controllers");
const { isAuthenticated } = require("../middlewares/auth");
let router = express.Router();

// home route
router.route("/").get(homepage);

// signup
router.route("/signup").post(signup);

// signin
router.route("/signin").post(signin);

// current user route
router.route("/user").post(isAuthenticated, currentuser);

// update user route
router.route("/edituser/:id").post(isAuthenticated, edituser);

// add education
router.route('/edituser/:id/education').post(isAuthenticated, addEducation);

// add achievement
router.route('/edituser/:id/achievement').post(isAuthenticated, addAchievement);

// update social media
router.route('/edituser/:id/socialmedia').post(isAuthenticated, updateSocialMedia);

// POST /student/avatar/:studentid
router.route("/avatar/:id").post(isAuthenticated, studentavatar);

// reset password route
router.route("/resetpassword/:id").post(isAuthenticated, resetpassword);

// send-mail for forget password
router.route("/send-mail").post(usersendmail);

// forgot password link
router.route("/forget-link/:id").post(userforgetlink);

// signout
router.route("/signout").post(signout);

// route for delete user
router.route("/deleteuser/:id").post(isAuthenticated, deleteuser);

// portfolio routes
 
// route for show all portfolio 
router.route("/allportfolio").post(showportfolio);

// **********************************  exam prep route  ***************************************

// get all exams
router.route("/exam-prep/exams").get(allexams);

// **********************************  IVY form rout  ***************************************

router.route("/submit-ivy-form").post(submit_ivy_form);


module.exports = router;