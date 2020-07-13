/**
 * Created by prathambatra on 12/07/20.
 */

const router = require('express').Router()
const Raven = require('raven')
const {closeOtherSessions} = require('../controllers/session')

router.post('/',(req,res) => {
    closeOtherSessions(req.user.id,JSON.stringify(req.session))
        .then(()=> {
            res.redirect('/users/me')
        }).catch((err=> {
            Raven.captureException(err)
    }))
})

module.exports = router