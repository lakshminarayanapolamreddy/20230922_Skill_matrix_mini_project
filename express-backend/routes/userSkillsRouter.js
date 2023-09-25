var express = require('express');
var router = express.Router();
var getUserSkills=require("../model/controller/AdminController/getUserSkills")
router.get('/',getUserSkills.getUserSkillDetails);
console.log("in userSkillsRouter1")
module.exports = router;

