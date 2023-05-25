export default function handler(req, res){
    const query = req.query
    const method = req.method
    if (method === 'POST') {
        res.send(query)
    } else {
        res.send(query)
    }
}