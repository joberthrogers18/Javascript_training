const Sequelize = require('sequelize');
const Op = Sequelize.Op;

//conexão com o banco de dados 
const sequelize = new Sequelize('postapp','root', 'winterfell', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: Op, // use Sequelize.Op
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}