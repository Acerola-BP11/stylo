const clienteController = require('../../Controllers/clienteController')
export default function handler(req, res) {
    const method = req.method
    if (method === 'GET') {
        clienteController.list(req, res)
    }
}