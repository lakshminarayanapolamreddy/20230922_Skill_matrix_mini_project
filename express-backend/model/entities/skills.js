//express-backend\model\entities\UserAdminRegistrations.js
module.exports=(sequelize,DataTypes)=>{
    const Skills=sequelize.define("Skills",{
       Email:{
        type:DataTypes.STRING,
        allownull:false,
       },
       Skill:{
        type:DataTypes.STRING,
        allownull:false,
       }
    },
    {timestamp:false,
       createdAt: false,
       updatedAt:false}
    )
    return Skills;
}
   