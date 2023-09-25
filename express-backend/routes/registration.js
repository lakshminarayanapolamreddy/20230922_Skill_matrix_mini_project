//express-backend\routes\registration.js
var express = require('express');
var router = express.Router();
var Useradmin=require("../model/controller/UserAdminRegistratons_controller")
router.post('/',Useradmin.create_user_admin);
module.exports = router;
