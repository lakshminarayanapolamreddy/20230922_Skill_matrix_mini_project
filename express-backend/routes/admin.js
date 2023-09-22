var express = require('express');
var router = express.Router();

var adminTrainingDetails=require("../model/controller/AdminController/TrainingDetails_controller")
var getTrainingDetails=require("../model/controller/AdminController/getTrainingDetails")
var editdetails=require("../model/controller/AdminController/editTraining")
var deletedetails=require('../model/controller/AdminController/deleteTraining')
var getdetails=require("../model/controller/AdminController/getTrainingbyid")

router.get("/",getTrainingDetails.getTrianing_details);
router.get("/get/:id",getdetails.getById);
router.post("/TrainingDetailsAdmin",adminTrainingDetails.Traning_details);
router.patch("/EditTrainingDetailsAdmin/:id",editdetails.edittraining);
router.delete("/DeleteTrainingDetailsAdmin/:id",deletedetails.deletetraining);


module.exports = router;

