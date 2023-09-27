//express-backend\model\entities\UserAdminRegistrations.js
module.exports = (sequelize, DataTypes) => {
   const Skills = sequelize.define("Skills", {
     Id: {
       type: DataTypes.INTEGER, // Use INTEGER for auto-incrementing primary keys
       autoIncrement: true,
       primaryKey: true,
     },
     Email: {
       type: DataTypes.STRING,
       allowNull: false, 
     },
     Skill: {
       type: DataTypes.STRING,
       allowNull: false, 
     },
   }, {
     timestamps: false, 
     createdAt: false,
     updatedAt: false,
   });
 
   return Skills;
 };
 