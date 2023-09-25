var express = require('express');
var router = express.Router();
var getUserSkills=require("../model/controller/AdminController/getUserSkills")
router.get("/userSkills",getUserSkills.getUserSkillDetails);
module.exports = router;

