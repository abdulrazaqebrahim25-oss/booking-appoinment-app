const router = require('express').Router()
const Provider = require('../models/Provider')

router.get('/', async(req, res)=> {
    const provider = await Provider.find()
    res.render('provider/provider.ejs',{provider: provider})
}) 

// get create page
router.get('/new', async(req, res) => {
    const provider = await Provider.find()
    res.render('provider/create-provider.ejs')
})

// post create page 

router.post('/new', async(req,res)=> { 
    const createProvider = await Provider.create(req.body) 
    res.redirect('/provider')
})


module.exports = router