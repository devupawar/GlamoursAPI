const mongoose = require('mongoose')
const ServiceSchema = mongoose.Schema({
    ServiceName: String,
    ServicePrice: String,
    ServiceType: String,
    ServiceImage: String,
    IsActive: String
}, {
    timestamps: true
})
module.exports = mongoose.model('Service', ServiceSchema)