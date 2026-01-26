const router = require("express").Router()
const Appointment = require('../models/Appointment')
const Service = require('../models/Service')
const User = require('../models/User')

router.get('/', async (req, res) => {
    console.log('SESSION USER 👉', req.session.user)

    const appointments = await Appointment.find()

    res.render('homepage.ejs', {appointments})
})
module.exports = router;
