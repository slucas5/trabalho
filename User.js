const {  DataTypes } = require('sequelize')

const db = require('./configdb')

const User = db.define('User', {

    nome: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
    },
})

module.exports = User