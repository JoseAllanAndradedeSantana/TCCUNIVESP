const sequelize = require("sequelize");

const connection = new sequelize('website','root','1234',{
    host:'localhost',
    dialect:'mysql',
    timezone:'-03:00'
})



module.exports = connection;