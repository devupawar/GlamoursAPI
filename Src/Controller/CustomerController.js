const Customer = require('../Models/CustomerSchema')
exports.addCustomer = (req, res) => {
    const customer = new Customer({
        CustomerName: req.body.CustomerName,
        CustomerEmail: req.body.CustomerEmail,
        CustomerMobile: req.body.CustomerMobile,
        CustomerAddress: req.body.CustomerAddress,
        CustomerPassword: req.body.CustomerPassword
    })
    customer.save()
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(500).send(err)
        });
}
exports.getAllCustomer = (req, res) => {
    Customer.find()
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(500).send(err)
        })
}
exports.deleteCustomer = (req, res) => {
    Customer.deleteOne({ _id: req.body.cid })
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(500).send(err)
        });
};
exports.updateCustomer = (req, res) => {
    Customer.findByIdAndUpdate({ _id: req.body.cid },
        {
            CustomerEmail: req.body.CustomerEmail,
            CustomerMobile: req.body.CustomerMobile,
            CustomerAddress: req.body.CustomerAddress,
            CustomerPassword: req.body.CustomerPassword
        },
        {
            new: true
        }).then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(500).send(err)
        });
}
exports.DoLogin = (req, res) => {
    Customer.findOne({
        CustomerEmail: req.body.CustomerEmail,
        CustomerPassword: req.body.CustomerPassword
    })
        .then((result) => {
            if (result) {
                res.status(200).json({ data: result, success: true })
            } else {
                res.status(200).json({ data: [], success: false })
            }


        }).catch((err) => {
            res.status(500).send(err)
        });
}
