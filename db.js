const Sequelize = require('sequelize')

const db = new Sequelize('userdb', 'myuser', 'pass', {
    dialect: 'mysql',
    host: 'localhost'
})
const User = db.define('users', {
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: true
    },
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING
})
db.sync().then(() => console.log("Database is ready"))

module.exports = {
    db, User
}