const db = require("../../entities");
const allSkills = db.Skills;
console.log("HERE MAN");

const getUserSkillDetails = async (req, res) => {
    try {
        const userSkills = await allSkills.findAll();
        console.log("DoneDana");
        if (userSkills) {
            res.status(200).json({ message: "data Fetched", allSkillDetails: userSkills });
        } else {
            res.status(200).json({ message: "data Not Fetched" });
        }
    } catch (error) {
        console.error(error); // Log the error
        res.status(500).json({ message: "Internal Server Error" }); // Respond with an error message
    }
};

module.exports = {
    getUserSkillDetails,
};


