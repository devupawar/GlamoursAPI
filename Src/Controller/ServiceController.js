const Service = require('../Models/ServiceSchema')
exports.addService = (req, res) => {
    const service = new Service({
        ServiceName: req.body.ServiceName,
        ServiceType: req.body.ServiceType,
        ServicePrice: req.body.ServicePrice,
        ServiceImage: req.body.ServiceImage,
        IsActive: req.body.IsActive
    })
    service.save()
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(500).send(err)
        });
}
exports.getAllServices = (req, res) => {
    Service.find()
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(500).send(err)
        });
}
exports.deleteService = (req, res) => {
    Service.deleteOne({ _id: req.body.sid })
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(500).send(err)
        });
};
exports.updateService = (req, res) => {
    Service.findByIdAndUpdate({ _id: req.body.sid },
        {
            ServicePrice: req.body.ServicePrice,
            IsActive:req.body.IsActive
        },
        {
            new: true
        }).then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(500).send(err)
        });
}
