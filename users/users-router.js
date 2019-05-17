const router = require('express').Router()

const Users = require('./users-model.js')
const restricted = require('../auth/restricted-middleware')

router.get('/', restricted, checkRole('user'), (req, res) => {
    Users.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => res.send(err))
})

function checkRole(role) {
    return function (req, res, next) {
        if(req.decodedToken.role.includes(role)) {
            next()
        } else {
            res.status(403).json({
                message: "You are not authorized to do this"
            })
        }
    }
}

module.exports = router