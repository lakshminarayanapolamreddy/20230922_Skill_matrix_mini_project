const db=require("../entities")
const UserTR_table=db.UserTRegTable
const Admintable=db.TrainingTable
const Create_UserTrainingDetails= async(req,res)=>{

    console.log(req.body)

      try{
        const result=await UserTR_table.create({
            TId:req.body.Id,
            UserEmail:req.body.Email,
           
        })
        const fordisable=await UserTR_table.findOne({
            where :{
                TId:req.body.Id,
                UserEmail:req.body.Email
            }
        })
        console.log("for disable = ",fordisable.RegiseteredOrNot)
        res.status(200).json({message:"Training Registered",button:fordisable.RegiseteredOrNot})


       

        const update=await Admintable.increment("PeopleRegistered",{
            where:{
                TrainingId:req.body.Id
            }
        })
        console.log(update)
      }catch(error){
        res.status(404).json({message:"Training"})
      }

   
}

module.exports={
    Create_UserTrainingDetails

}

