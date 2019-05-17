const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Users = require('../users/users-model')
// const secrets = require('../config/secrets')

module.exports = (req,res, next) => {
    const token = req.headers.authorization

    const secret = "pound sand!"

    jwt.verify(token, secret, (err, decodedToken) => {
        if(err) {
            res.status(401).json({ message: 'correct your token' })
        } else {
            req.decodedToken = decodedToken
            next();
        }
    })
}