const Sequelize = require("sequelize");
const connection = require("../database/database");

const Doenca = connection.define('doenca',{
    nome:{
        type:Sequelize.STRING,
        allowNull:false
    }, sintomas:{
        type: Sequelize.STRING,
        allowNull:false
    }
})

Doenca.sync({force:false});
module.exports = Classe;