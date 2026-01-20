const mongoose = require('mongoose')
const Provider = require('./Provider')
const Appointment = require('./Appointment')

// Schema 

const serviceSchema = new mongoose.Schema({
    service: {
        type: String,
        
    },
    price: Number,
    details: String,
    user: {type: mongoose.Schema.Types.ObjectId,
        ref: User
    },
    provider: {type: mongoose.Schema.Types.ObjectId,
        ref: Provider
    },
    appointment: {type: mongoose.Schema.Types.ObjectId,
        ref: Appointment
    }

}) 

const Service = mongoose.model('Service', serviceSchema)


module.exports = Service 