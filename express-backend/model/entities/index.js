const dotenv = require('dotenv')
const dbconfig=require("../../config/dbconfig");
const sql=require("pg");
const {Sequelize,DataTypes}=require("sequelize");
const db={};
dotenv.config()
const client= new sql.Client({ user: dbconfig.USER, password: dbconfig.PASSWORD })
// Connect to the PostgreSQL database
client.connect()
  .then(() => {
    console.log('4.Connected to PostgreSQL DATABASE Successfully');
    // You can start executing queries here
  })
  .catch((err) => {
    console.error('Error connecting to PostgreSQL database:', err);
  });
    
const sequelize=new Sequelize(
    dbconfig.DATABASE,
    dbconfig.USER,
    dbconfig.PASSWORD,{
        dialect:'postgres',
        host:dbconfig.HOST
    }
);

(async () => {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  })();

db.sequelize=sequelize;

db.UserAdminRegTable=require("./UserAdminRegistrations")(sequelize,DataTypes)
db.Skills=require("./skills")(sequelize,DataTypes)
db.sequelize.sync({force:false}).then(()=>{
    console.log("re-sync-done")
})

module.exports=db