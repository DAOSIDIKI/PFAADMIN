const Sequelize=require('sequelize');
const sequelize=require('../db');
const Etudiant=sequelize.define("Etudiants",{
    CNE:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    nom:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    prenom:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        validate:{
            is: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        }
    },
    tel:{
        type:Sequelize.STRING,
        allowNull:false,
        validate:{
            is:/^[0-9]{10}$/
        }
    },
    genre:{
        type:Sequelize.STRING,
        allowNull:false,
        validate:{
            is:"Homme|Femme"
        }
    },
    ville:{
        type:Sequelize.STRING,
        allowNull:false
    },
},{timestamps:false})
module.exports=Etudiant;