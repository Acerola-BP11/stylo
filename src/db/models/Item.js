const { DataTypes } = require("sequelize");
const sequelize = require("..");

const Item = sequelize.define('Item', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    preco:{
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    tamanho:{
        type: DataTypes.DOUBLE(2, 2),
        allowNull: false
    },
    quantidade: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    tecido: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    cor: {
        type: DataTypes.INTEGER(5),
        allowNull: true
    },
    cor_descricao: {
        type: DataTypes.TEXT,
        allowNull: true
    }
    })

Item.sync()

module.exports = Item