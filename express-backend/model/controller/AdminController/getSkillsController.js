const db=require("../../entities")
const Skills=db.Skills;
const getTrianing_details= async(req,res)=>{
    try{
        const userSkills = await Skills.findAll();
        if(userSkills){
           res.status(200).json({ message: "data Fetched" ,alldata:userSkills});
       }
        else{
            res.status(200).json({message:"data Not Fetched"});
        }  
    } 
    catch (error) {
        console.log(error.message);
    }
}
module.exports={
    getTrianing_details,
}