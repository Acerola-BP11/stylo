const { DataTypes } = require("sequelize");
const sequelize = require("..");
const Cliente = require('./Cliente')
const Item = require('./Item')

const Pedido = sequelize.define('Pedido', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    observacao: {
        type: DataTypes.TEXT,
        allowNull: true
    }
})

Pedido.sync()
Pedido.belongsTo(Cliente)
Pedido.hasMany(Item, {
    onDelete: 'CASCADE'
})

module.exports = Pedido