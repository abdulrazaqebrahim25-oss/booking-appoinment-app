const router = require("express").Router()
const Appointment = require('../models/Appointment')
const Service = require('../models/Service')
const User = require('../models/User')

router.get('/',async(req,res)=>{
    const appointment = await Appointment.find()
    const user = await User.find()

    res.render('homepage.ejs',{appointment, user})
})
module.exports = router;
