var express = require('express');
var router = express.Router();

//controller is for applying business logic
//here we are taking the insert logic from controller and save in varaible admin
var Useradmin=require("../model/controller/UserAdminRegistratons_controller")
console.log("2.Registration.js");
//while api calls this the particular action happens in the database eg. here we are inserting records
router.post('/',Useradmin.create_user_admin);

module.exports = router;
