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

// get by id 

router.get('/update/:id', async(req,res)=> {
    const foundProvider = await Provider.findById(req.params.id)
    res.render('provider/update-provider.ejs',{foundProvider: foundProvider})
})

// post update 

router.post('/update/:id', async(req,res)=>{
    const updated = await Provider.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/provider')
})

// delete router 

router.post('/delete/:id', async(req, res)=>{
    const deleted = await Provider.findByIdAndDelete(req.params.id)
    res.redirect('/provider')
} )

module.exports = router