const db = require('../entities'); // Replace with the actual path to your models
const Skills = db.Skills; // Replace with the actual model name for skills
const UserAdminRegTable = db.UserAdminRegTable; // Replace with the actual model name for user registrations
const addSkill = async (req, res) => {
    const {email, skills} = req.body
    console.log(email, "This is 1")
  if (email && skills) {
    try {
      // Check if the user with the specified email exists
      const user = await UserAdminRegTable.findOne({ where: { Email : email } });
      console.log(email)
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      // Store each skill in the database
      for (let a of skills) {
        Skills.create({
          Email:email,
          Skill: a
        });
      }
      res.status(201).json({ message: 'Skill added successfully' });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(400).json({ message: 'Invalid request' });
  }
};

module.exports = {
  addSkill,
};
