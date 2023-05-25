const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Cliente = sequelize.define('Cliente', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    razao:{
        type: DataTypes.STRING(120),
        allowNull:false
    },
    responsavel:{
        type: DataTypes.STRING(120),
        allowNull: true
    },
    ddd:{
        type: DataTypes.INTEGER(2),
        allowNull: true
    },
    telefone:{
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    endereco:{
        type: DataTypes.TEXT,
    },
    cnpj:{
        type: DataTypes.INTEGER(13),
        allowNull: false
    },
    inscricao_estadual:{
        type: DataTypes.INTEGER(9),
        allowNull: true
    },
    email:{
        type: DataTypes.TEXT,
        allowNull: true
    },
    cep:{
        type: DataTypes.INTEGER(8),
        allowNull: false
    },
    estado:{
        type: DataTypes.STRING(2),
        allowNull: false
    },
    cidade: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    bairro:{
        type: DataTypes.TEXT,
        allowNull: false
    }
})

Cliente.sync()

module.exports = Cliente