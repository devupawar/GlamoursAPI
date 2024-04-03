const Appointment = require('../Models/AppointmentSchema')
exports.addAppointment = (req, res) => {
    const Appoint = new Appointment({
        ServiceId: req.body.ServiceId,
        CustomerId: req.body.CustomerId,
        AppointmentDate: req.body.AppointmentDate,
        AppointmentTime: req.body.AppointmentTime
    })
    Appoint.save()
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(500).send(err)
        });
}
exports.getAllAppointment = (req, res) => {
    Appointment.find()
        .populate('ServiceId', 'ServiceName ServiceType')
        .populate('CustomerId')
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(500).send(err)
        });
}

exports.getAppointmentById = (req, res) => {
    Appointment.find({ CustomerId: req.body.CustomerId })
        .populate('ServiceId', 'ServiceName ServiceType')
        .populate('CustomerId', 'CustomerEmail CustomerPassword')
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(500).send(err)

        });
}
exports.deleteAppointment = (req, res) => {
    Appointment.deleteOne({ _id: req.body.aid })
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(500).send(err)
        });
}
exports.UpdateAppointment = (req, res) => {
    Appointment.findByIdAndUpdate({ _id: req.body.aid },
        {
            AppointmentStatus: req.body.AppointmentStatus
        },
        {
            new: true
        }).then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(500).send(err)
        });
}