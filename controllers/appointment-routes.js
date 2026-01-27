const router = require('express').Router()
const Appointment = require('../models/Appointment')
const Service = require('../models/Service')
const User = require('../models/User')

// get all 

router.get('/', async(req, res)=> {
    if(req.session.user.role === 'Admin'){
    const appointments = await Appointment.find().populate('user').populate({
        path:'service',
        model:'Service',
        populate:{
            path:'provider',
            model:'Provider'
        }
    })
    console.log(appointments)
    res.render('appointment/appointment.ejs',{appointments: appointments})

    }
    else{

    const appointments = await Appointment.find({user:req.session.user._id}).populate('user').populate({
        path:'service',
        model:'Service',
        populate:{
            path:'provider',
            model:'Provider'
        }
    })
    
    res.render('appointment/appointment.ejs',{appointments: appointments})
        }

    
})

// get create page

router.get('/new', async(req, res)=> {
    const appointments = await Appointment.find()
    const service = await Service.find().populate('provider')
    res.render('appointment/create-appointment.ejs', {appointments, service})
}) 

// post create 

router.post('/new', async(req, res)=>{
    req.body.user = req.session.user._id
    const created = await Appointment.create(req.body)
    res.redirect('/appointment')
})



module.exports = router