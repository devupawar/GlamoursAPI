const mongoose=require('mongoose')
const CustomerSchema=mongoose.Schema({
    CustomerName:String,
    CustomerEmail:String,
    CustomerMobile:String,
    CustomerAddress:String,
    CustomerPassword:String
},{
    timestamps:true
})
module.exports=mongoose.model('Customer',CustomerSchema)