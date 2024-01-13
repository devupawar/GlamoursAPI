const express=require("express")
const router=express.Router()

const CustomerController=require('../Controller/CustomerController')
router.post("/addcustomer",CustomerController.addCustomer)
router.get("/getAllcustomer",CustomerController.getAllCustomer)
router.post("/deletecustomer",CustomerController.deleteCustomer)
router.post("/updatecustomer",CustomerController.updateCustomer)
router.post("/dologin",CustomerController.DoLogin)

const ServiceController=require('../Controller/ServiceController')
router.post('/addservice',ServiceController.addService)
router.get("/getAllservices",ServiceController.getAllServices)
router.post('/deleteservice',ServiceController.deleteService)
router.post('/updateservice',ServiceController.updateService)

const AppointmentController=require("../Controller/AppointmentController")
router.post('/addappointment',AppointmentController.addAppointment)
router.get("/getAllAppointments",AppointmentController.getAllAppointment)
router.post('/deleteAppointment',AppointmentController.deleteAppointment)
router.post('/updateAppointment',AppointmentController.UpdateAppointment)

const CountController=require("../Controller/CounterController")
router.post('/getcustomercount',CountController.getCustomerCount)
router.post('/getservicecount',CountController.getServiceCount)
router.post('/getAppointmentcount',CountController.getAppointmentCount)


module.exports=router