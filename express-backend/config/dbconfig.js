const dotenv = require('dotenv')
dotenv.config()
module.exports={
    HOST:process.env.HOST,
    USER:process.env.USER,
    PASSWORD:process.env.PASSWORD,
    PORT:process.env.PORT,
    DATABASE:process.env.DATABASE,
    DIALECT:process.env.DIALECT,
}   
