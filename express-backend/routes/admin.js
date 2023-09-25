var express = require('express');
var router = express.Router();
console.log("I am here")
var getTrainingDetails=require("../model/controller/AdminController/getTrainingDetails")
router.get("/",getTrainingDetails.getTrianing_details);
module.exports = router;

