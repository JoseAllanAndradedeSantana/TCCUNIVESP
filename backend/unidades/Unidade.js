const Sequelize = require("sequelize");
const connection = require("../database/database");

const Unidade = connection.define('unidade',{
    nome:{
        type:Sequelize.STRING,
        allowNull:false
    }, cidade:{
        type: Sequelize.STRING,
        allowNull:false
    }, vacina:{
        type: Sequelize.STRING,
        allowNull:false
    },estado:{
        type: Sequelize.STRING,
        allowNull:false
    }
})

Unidade.sync({force:false});
module.exports = Unidade;