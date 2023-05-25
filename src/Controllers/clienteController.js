const Cliente = require('../db/models/Cliente')

module.exports = {
    create: async (req, res) => {
        const id = await Cliente.create(req.body)
        return await res.redirect(`/cliente/${id}`)
    },
    form: async (_, res) => {
        return res.render('cliente/form')
    },
    delete: async (req, res) => {
        const id = await req.body.id
        Cliente.destroy({where: {id}})
        return res.redirect('/cliente')
    },
    update: async (req, res) => {
        const cliente = await req.body
        const id = Cliente.update({id: cliente.id}, {
            razao: cliente.razao,
            responsavel: cliente.responsavel,
            ddd: cliente.ddd,
            telefone: cliente.telefone,
            endereco: cliente.endereco,
            cnpj: cliente.cnpj,
            inscricao_estadual: cliente.inscricao_estadual,
            email: cliente.email,
            cep: cliente.cep,
            estado: cliente.estado,
            cidade: cliente.cidade,
            bairro: cliente.bairro
        })
        return res.redirect(`/cliente/${id}`)
    },
    view: async (req, res) => {
        const id = parseInt(await req.params.id)
        const cliente = await Cliente.findByPk(id, {raw: true})
        console.log(cliente)
        return await res.render('/cliente/list', {clientes: cliente})
    },
    list: async (_, res) => {
        let clientes = await Cliente.findAll({raw: true})
        return await res.status(200).send(clientes)
    }
}