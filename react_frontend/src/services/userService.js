import axios from 'axios'

// Register Button Functionality
const saveTrainingDetails = async(Id,Email)=>{
    const RegDetails = await axios.post(`${process.env.REACT_APP_PORTSERVER}/users`,{Id,Email})
    return RegDetails
}

export  {saveTrainingDetails}




