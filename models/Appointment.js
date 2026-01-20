const mongoose = require('mongoose')
const User = require('./User')

// Schema 

const appointmentSchema = new mongoose.Schema({
    date: {type: Date},
    time: {type: String},
    user: {type: mongoose.Schema.Types.ObjectId,
        ref: User
    }

}) 

const Appointment = mongoose.model('Appointment', appointmentSchema)

module.exports = Appointment