const mongoose = require('mongoose')
const AppointmentSchema = mongoose.Schema({
    AppointmentDate: Date,
    AppointmentTime:String,
    AppointmentStatus: { type: String, default: "Pending" },
    ServiceId: { type: mongoose.Schema.Types.ObjectId, ref: "Service" },
    CustomerId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" }
}, {
    timestamps: true
})
module.exports = mongoose.model('Appointment', AppointmentSchema)