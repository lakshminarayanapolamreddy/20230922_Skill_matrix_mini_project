import axios from 'axios'


const getAllTrainingDetails = async ()=> {
    const getAllTraining = await axios.get(`${process.env.REACT_APP_PORTSERVER}/admin`)
    return getAllTraining
}


const getTrainingById= async (id)=>{
    const getTrainingId = await axios.get(`${process.env.REACT_APP_PORTSERVER}/admin/get/${id}`)
    return getTrainingId
}

const trainingDetails = async (data) => {
    console.log("called api")
    const trainingD = await axios.post(`${process.env.REACT_APP_PORTSERVER}/admin/TrainingDetailsAdmin`,data);
    return trainingD;
}

const updateDetails=async(id)=>{
    console.log("called api")
    const updatetraining = await axios.patch(`${process.env.REACT_APP_PORTSERVER}/admin/EditTrainingDetailsAdmin/${id}`);
    return updatetraining;
}

const deletedetails=async(id)=>{
    const deltraining = await axios.delete(`${process.env.REACT_APP_PORTSERVER}/admin/DeleteTrainingDetailsAdmin/${id}`);
    return deltraining;
}






export default {getAllTrainingDetails,getTrainingById,trainingDetails,updateDetails,deletedetails}

