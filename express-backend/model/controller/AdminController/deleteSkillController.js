const db = require("../../entities");
const userSkills = db.Skills;
const deleteUserSkill = async (req, res) => {
    try {
        console.log("entered");
        const skillId = req.params.skillId;
        console.log("OK")
        console.log(skillId,"SkillId received")
        const skill = await userSkills.findByPk(skillId);
        if (!skill) {
            return res.status(404).json({ message: "Skill not found" });
        }
        await skill.destroy();
        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = {
    deleteUserSkill,
};
