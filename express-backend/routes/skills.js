const express = require('express');
const router = express.Router();
const skillsController = require('../model/controller/skillController'); // Replace with the actual path to your controller
router.post('/', skillsController.addSkill);
module.exports = router;
