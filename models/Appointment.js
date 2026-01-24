const mongoose = require('mongoose')
const User = require('./User')
const Service = require('./Service')

// Schema 

const appointmentSchema = new mongoose.Schema({
    date: {type: Date},
    time: {type: String},
    user: {type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    service: {type: mongoose.Schema.Types.ObjectId,
        ref: 'Service'
    }

}) 

const Appointment = mongoose.model('Appointment', appointmentSchema)

module.exports = Appointment