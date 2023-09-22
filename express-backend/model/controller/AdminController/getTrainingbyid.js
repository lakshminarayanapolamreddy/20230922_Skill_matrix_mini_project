const db=require("../../entities")

const TAReg=db.UserAdminRegTable;


const getById=async(req,res)=>{
    console.log("Edit Function called",req.params.id)
    try {
        const trainingdata=await TAReg.findOne({
            where:{
                Id: req.params.id
            }
        });
        res.status(200).json({msg: "Data is Fetched",iddata:trainingdata});
    } catch (error) {
        console.log(error.message);
    }
}


module.exports={
    getById,
}