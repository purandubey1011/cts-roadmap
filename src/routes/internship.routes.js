let express = require("express");
const {
    applyinternship,
    allinternship
} = require("../controllers/internship.controllers.js");
let router = express.Router();

// home route
router.route("/apply").post(applyinternship);

// home route
router.route("/allinternship").post(allinternship);


module.exports = router;