var express = require('express');
var deleterouter = express.Router();
// Update the import path for deleteSkill
var deleteSkill = require("../model/controller/AdminController/deleteSkillController");
deleterouter.delete('/:skillId', deleteSkill.deleteUserSkill);
module.exports = deleterouter;
