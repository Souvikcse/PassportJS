const express = require('express')
const session = require('express-session')
const passport = require('./passport')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(session({
    secret: 'soub'
}))
app.use(passport.initialize())
app.use(passport.session())

app.set("view engine", "hbs")

app.use('/public', require('./routes/public'))
app.use('/private', require('./routes/private'))
app.use('/', require('./routes/root'))

app.listen(9700)