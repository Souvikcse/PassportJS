const route = require('express').Router()

route.get('/', (req, res) => {
    res.send('Visible to all')
})

module.exports = route