import axios from 'axios';

const getAllTrainingDetails = async () => {
    const getAllTraining = await axios.get(`${process.env.REACT_APP_PORTSERVER}/admin`);
    console.log('ok')
    return getAllTraining;
};

const skills = async (email, skills) => {
    const data = { email, skills };
    const addSkills = await axios.post(`${process.env.REACT_APP_PORTSERVER}/skills`, data);
    return addSkills;
};


export default { getAllTrainingDetails, skills };
