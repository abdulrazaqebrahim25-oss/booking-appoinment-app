const router = require('express').Router()
const Appointment = require('../models/Appointment')
const Service = require('../models/Service')
const User = require('../models/User')

// get all 

router.get('/', async(req, res)=> {
    const appointments = await Appointment.find()
    res.render('appointment/appointment.ejs',{appointments: appointments})
})

// get create page

router.get('/new', async(req, res)=> {
    const appointments = await Appointment.find()
    const service = await Service.find().populate('provider')
    res.render('appointment/create-appointment.ejs', {appointments, service})
}) 

// post create 

router.post('/new', async(req, res)=>{
    const created = await Appointment.create(req.body)
    res.redirect('/appointment')
})



module.exports = router