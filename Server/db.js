const Sequelize=require('sequelize');
const sequelize=new Sequelize('etudiants','root','sidiki1234&',{
    dialect:"mysql",
    host:"localhost"
})
module.exports=sequelize;