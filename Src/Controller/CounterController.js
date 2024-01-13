const Appointment=require('../Models/AppointmentSchema')
const Customer=require('../Models/CustomerSchema')
const Service=require('../Models/ServiceSchema')

exports.getCustomerCount=(req,res)=>{
    Customer.countDocuments()
    .then((result) => {
        res.status(200).json({count:result})
    }).catch((err) => {
        res.status(500).send(err)
    });
}

exports.getAppointmentCount=(req,res)=>{
    Appointment.countDocuments()
    .then((result) => {
        res.status(200).json({count:result})
    }).catch((err) => {
        res.status(500).send(err)
    });
}

exports.getServiceCount=(req,res)=>{
    Service.countDocuments()
    .then((result) => {
        res.status(200).json({count:result})
    }).catch((err) => {
        res.status(500).send(err)
    });
}