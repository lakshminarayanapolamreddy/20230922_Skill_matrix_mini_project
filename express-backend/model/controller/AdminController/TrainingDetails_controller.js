const db=require("../../entities")

const Tdetails_table=db.TrainingTable;
const Traning_details= async(req,res)=>{
    const{  title,
        skillType,
        skillCategory,
        startDateAndTime,
        endDateAndTime,
            description,
            mode,
            Link,
            count
         } = req.body;
    if(title && skillType && skillCategory && startDateAndTime && endDateAndTime && description && mode && count){
        try{
            console.log("data came")
            const newTraining = await Tdetails_table.create({
                TrainingTitle:title,
                SkillTitle:skillType,
                SkillCategory:skillCategory,
                StartDate:startDateAndTime,
                EndDate:endDateAndTime,
                Description:description,
                ParticipationLimit:count,
                TrainingMode:mode,
                MeetingLink:Link,
                
            });
            res.status(200).json({ message: "Training added" });
        }
        catch (error) {
            console.log(error.message);
        }
    } else{
        res.status(200).json({message:"Please fill all the fields"});
    }
}

module.exports={
     Traning_details,
}
