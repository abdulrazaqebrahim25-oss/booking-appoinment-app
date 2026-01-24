const router = require('express').Router()
const Appointment = require('../models/Appointment')
const User = require('../models/User')

// get all 

router.get('/', async(req, res)=> {
    const appointments = await Appointment.find()
    res.render('appointment/appointment.ejs',{appointments: appointments})
})

// get create page

router.get('/new', async(req, res)=> {
    const appointments = await Appointment.find()
    res.render('appointment/create-appointment.ejs', {appointments: appointments})
})



module.exports = router