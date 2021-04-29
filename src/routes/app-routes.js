const {Router}  = require('express')
const router = Router()


router.get('/',(req, res) => {
    res.render('index')
})

router.get('/benee',(req, res) => {
    res.render('benee')
})

module.exports = router

