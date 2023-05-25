const Pedido = require('../models/Pedido')
const Item = require('../models/Item')
const Cliente = require('../models/Pedido')

const add_itens = (cliente, ...itens) => {
    itens.map(item => item.cliente = cliente)
    return itens
}

module.exports = {
    create: async (req, res) => {
        const cliente = await req.body.cliente
        const observacao = await req.body.observacao
        await Pedido.create({observacao, cliente})
        const itens = add_itens(cliente, req.body.itens)
        await Item.bulkCreate(itens)
        return await res.redirect(`/pedidos/${id}`)
    },
    form: async (_, res) => {
        return res.render('/pedidos/form')
    },
    delete: async (req, res) => {
        const id = await req.body.id
        await Pedido.destroy({where: {id}})
        return await res.redirect('/pedidos')
    },
    update: async (req, res) => {
        req = await req
        const id_pedido = await req.body.id
        await Item.destroy({where: {id_pedido}})
        const id = Pedido.update({id: id_pedido}, {
            observacao: req.body.observacao,
            cliente: req.body.cliente
        })
        const itens = add_itens(cliente, req.body.itens)
        await Item.bulkCreate(itens)
        return await res.redirect(`/pedido/${id}`)
    },
    view: async (req, res) => {
        const id = await req.params.id
        const pedido = await Pedido.findByPk(id)
        return await res.render('/pedido/view', {pedido})
    },
    list: async (_, res) => {
        const pedidos = await Pedido.findAll()
        pedidos.map(async pedido => {
            const cliente = await Cliente.findByPk(pedido.id_cliente)
            pedido.cliente_cnpj = cliente.cnpj
            pedido.cliente_razao = cliente.razao
            return pedido
        })
        return await res.redirect('cliente/list', {pedidos})
    }
}