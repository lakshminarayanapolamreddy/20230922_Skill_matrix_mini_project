
module.exports=(sequelize,DataTypes)=>{
    const TDetails=sequelize.define("TrainingDetails",{
       TrainingId:{
           type:DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true
       },
        TrainingTitle:{
            type:DataTypes.STRING,
            allownull:false
        },
        SkillTitle:{
            type:DataTypes.STRING,
            allownull:false
        },
        SkillCategory:{
            type:DataTypes.STRING,
            allownull:false
        },
        StartDate:{
            type:DataTypes.DATE,
            allownull:false
        
        },
        EndDate:{
            type:DataTypes.DATE,
            allownull:false
            },
        ParticipationLimit:{
            type:DataTypes.INTEGER,
            allownull:false
        },
        TrainingMode:{
            type:DataTypes.STRING,
            allownull:false
        },
        MeetingLink:{
            type:DataTypes.STRING
        },
        Description:{
            type:DataTypes.STRING,
            allownull:false
        },
        PeopleRegistered:{
            type:DataTypes.INTEGER,
            defaultValue:0
        }

    }
    )
    return TDetails;
}
   