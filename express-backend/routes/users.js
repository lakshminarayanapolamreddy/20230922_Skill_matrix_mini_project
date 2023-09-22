var express = require('express');
var router = express.Router();
var createusertraining=require("../model/controller/UserTrainingRegistrations_controller")
router.post("/",createusertraining.Create_UserTrainingDetails)
module.exports = router;