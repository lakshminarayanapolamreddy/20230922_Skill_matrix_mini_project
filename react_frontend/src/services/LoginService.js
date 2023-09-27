import axios from 'axios';
// for SignUp
const saveDetails = async(data)=>{
    const saveuserDetails = await axios.post(`${process.env.REACT_APP_PORTSERVER}/`,data)
    console.log(saveuserDetails)
    return saveuserDetails
}
// for Login 
const checkDetails = async(data)=>{
    const checkUserdetails = await axios.post(`${process.env.REACT_APP_PORTSERVER}/loginDetails`,data)
    return checkUserdetails
}

export default {saveDetails,checkDetails}




