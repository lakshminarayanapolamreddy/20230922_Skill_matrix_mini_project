module.exports=(sequelize,DataTypes)=>{
    const UAReg=sequelize.define("UserAdminRegistrations",{
       Id:{
           type:DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true
       },
       EmployeeId:{
        type:DataTypes.STRING,
        allownull:false,
       },
       FullName:{
           type:DataTypes.STRING,
           allownull:false
       },
       Email:{
          type:DataTypes.STRING,
          unique:true,
          allownull:false
       },
       Password:{
           type:DataTypes.STRING,
           allownull:false
       },
       Designation:{
        type:DataTypes.STRING,
           allownull:false
       },
       Mobile:{
        type:DataTypes.STRING,
           allownull:false
       }, 
       BloodGroup:{
        type:DataTypes.STRING,
        allownull:false,
       },
       Address:{
        type:DataTypes.STRING,
        allownull:false,
       },
    },
    {timestamp:false,
       createdAt: false,
       updatedAt:false}
    )
    return UAReg;
   }
   