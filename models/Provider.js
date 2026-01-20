const mongoose =  require('mongoose')

// Schema 

const providerSchema = new mongoose.Schema({
    name: String, 
    email: {type: String, unique: true},
    image: {type: String},
    qualification: String

}) 

const Provider = mongoose.model('Provider',providerSchema)

module.exports = Provider 

