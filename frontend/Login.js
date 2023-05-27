const Sequelize = require("sequelize");
const connection = require("../database/database");

const Usuario = connection.define('usuario',{
    nome:{
        type:Sequelize.STRING,
        allowNull:false
    }, senha:{
        type: Sequelize.STRING,
        allowNull:false
    }
})

Login.sync({force:false});
module.exports = Classe;