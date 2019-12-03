module.exports = {
    getGoods: (req, res) => {
        const db = req.app.get('db')
        db.get_all_goods().then(allGoods => {
            res.status(200).send(allGoods)
        })
        .catch(err => {
            res.status(400).send('error in getting goods:', err)
        })
    }
}