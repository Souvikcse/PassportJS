const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const Users = require('./db').User

passport.serializeUser((user, done) => {
    done(null, user.username)
})
passport.deserializeUser((username, done) => {
    Users.findOne({
        username: username
    }).then((user) => {
        if (!user){
            return done(new Error('No such user'))
        }
        return done(null, user)
    }).catch((err) => {
        done(err)
    })
})

passport.use(new LocalStrategy((username, password, done) => {
    Users.findOne({
        where: {
            username: username
        }
    }).then((user) => {
        if (!user){
            return done(null, false, {message: 'No such user'})
        }
        if (user.password !== password){
            return done(null, false, {message: 'Wrong password'})
        }
        return done(null, user)
    }).catch((err) => {
        return done(err)
    })
}))

module.exports = passport
