let express = require("express");
const {
  submitessay,
  essayverifypayment,
  payment_success_essay,
  CommonAppReview,
  commonapp_verifypayment,
  payment_success_commonapp,
  CssProfile,
  cssprofile_verifypayment,
  payment_success_cssprofile,
  examprep_createpayment,
  examprep_verifypayment,
  examprep_success_payment,
  deletecreatedpayment
} = require("../controllers/exclusive.controllers");
const { isAuthenticated } = require("../middlewares/auth");

let router = express.Router();

// **************ESSAY EDITING SERVICES***************

// essay submission and order creation
router.route("/submit-essay").post(submitessay);

// route for verify payment
router.route("/essay-verify-payment").post(essayverifypayment);

// route for verify payment
router.route("/payment-success-essay/:payid").post(payment_success_essay);

// **************COMMON APP REVIEW***************

// essay submission and order creation
router.route("/submit-common-app").post(CommonAppReview);

// route for verify payment
router.route("/commonapp-verify-payment").post(commonapp_verifypayment);

// route for verify payment
router.route("/payment-success-commonapp/:payid").post(payment_success_commonapp);

// **************CSS PROFILE HELP***************

// essay submission and order creation
router.route("/submit-css-profile").post(CssProfile);

// route for verify payment
router.route("/cssprofile-verify-payment").post(cssprofile_verifypayment);

// route for verify payment
router.route("/payment-success-cssprofile/:payid").post(payment_success_cssprofile);

// **************exam preperation routes for payment, rest route in admin***************

// essay submission and order creation
router.route("/submit-examprep").post(examprep_createpayment);

// // route for verify payment
router.route("/examprep-verify-payment").post(examprep_verifypayment);

// // route for verify payment
router.route("/payment-success-examprep/:payid").post(examprep_success_payment);

// testing deleting schema route
router.route("/deletepay").get(deletecreatedpayment);

module.exports = router;
