const router = require('express').Router()


router.use('/api', require('./burgerController.js'))
router.get('/*', (req, res) => res.redirect('/api/burgers'))



module.exports = router
