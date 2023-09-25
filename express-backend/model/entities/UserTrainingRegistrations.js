module.exports=(sequelize,DataTypes)=>{
    const UserTR = sequelize.define("UserTrainingRegistrations",{

        RegUserID:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allownull:false
        },
       TId:{
           type:DataTypes.INTEGER,
           allownull:false
       },

       UserEmail:{
          type:DataTypes.STRING,
          allownull:false
       },
       RegiseteredOrNot:{
           type:DataTypes.BOOLEAN,
           defaultValue:true  
       }
    }
    )
    return UserTR;
   }
   