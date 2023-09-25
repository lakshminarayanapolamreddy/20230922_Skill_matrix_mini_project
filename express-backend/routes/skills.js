const express = require('express');
const router = express.Router();
const skillsController = require('../model/controller/skillController'); // Replace with the actual path to your controller
// Define an endpoint to add user skills
router.post('/', skillsController.addSkill);

module.exports = router;
