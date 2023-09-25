const db=require("../../entities")
const allSkills=db.Skills;
console.log("HERE MAN")
const getUserSkillDetails= async(req,res)=>{
    console.log("Ikkada")
    try{
        const userSkills = await allSkills.findAll();
        if(userSkills){
           res.status(200).json({ message: "data Fetched" ,allSkills:userSkills});
           console.log(allSkills)
        } else{
            res.status(200).json({message:"data Not Fetched"});
        }  
    } 
    catch (error) {
        console.log(error.message);
    }
}

module.exports={
    getUserSkillDetails,
}