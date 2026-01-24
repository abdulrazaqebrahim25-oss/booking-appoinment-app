const router = require('express').Router()
const Provider = require('../models/Provider')
const Appointment = require('../models/Appointment')
const User = require('../models/User')
const Service = require('../models/Service')

// get all services

router.get('/', async(req, res)=> {
    const services = await Service.find().populate('provider')
    res.render('service/service.ejs',{services:services})
})

// get service routes

router.get('/new', async(req,res)=> {
    const providers = await Provider.find()
    res.render('service/create-service.ejs',{providers: providers})
})

// post for create 

router.post('/new', async(req, res)=>{
    const service = await Service.create(req.body)
    res.redirect('/service')
})

//  get by ID 

router.get('/:id', async(req, res)=>{
    const foundService = await Service.findById(req.params.id)
    const providers = await Provider.find()
    res.render('service/edit-service.ejs',{foundService, providers})
})

// post for edit
router.post('/:id/edit', async(req,res)=>{
    const edited = await Service.findByIdAndUpdate(req.params.id, req.body, {new: true}).populate('provider')
    res.redirect('/service')
})

// post for delete

router.post('/:id/delete', async(req,res) =>{
    const deleted = await Service.findByIdAndDelete(req.params.id)
    res.redirect('/service')
})

module.exports = router 
