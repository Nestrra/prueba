const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../../db.js')



const User = sequelize.define("users", {

    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },


    codigoCliente: {
        type: DataTypes.STRING,
        allowNull: false,


    },
    usuario: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,

    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    cargo: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    correoElectronico: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }

    },
    numCel: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    tiopAcceso: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    autoriWebStore: {
        type: DataTypes.BOOLEAN,
        allowNull: false,

    },
    autoriOrdens: {
        type: DataTypes.BOOLEAN,
        allowNull: false,

    },
    envioInfo: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,


    }


})

module.exports = User;