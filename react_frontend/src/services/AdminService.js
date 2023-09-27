import axios from 'axios';

const getAllTrainingDetails = async () => {
    const getAllTraining = await axios.get(`${process.env.REACT_APP_PORTSERVER}/admin`);
    return getAllTraining;
};

const addSkills = async (email, skills) => {
    const data = { email, skills };
    const addSkills = await axios.post(`${process.env.REACT_APP_PORTSERVER}/skills`, data);
    return addSkills;
};

const userSkillDetails = async () =>{
    const getUserSkills = await axios.get(`${process.env.REACT_APP_PORTSERVER}/userSkills`)
    return getUserSkills;
};

const deleteSkill = async(skillId) =>{
    console.log(skillId, "skillID HERE")
    const deleteSelectedSkill = await axios.delete(`${process.env.REACT_APP_PORTSERVER}/skills/${skillId}`);
    return deleteSelectedSkill;
}

export default { getAllTrainingDetails, addSkills, userSkillDetails,deleteSkill};
