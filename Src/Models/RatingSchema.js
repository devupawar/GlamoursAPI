const mongoose=require('mongoose')
const RatingSchema = mongoose.Schema({
    Rating:Number,
    Comment:String,
    ServiceId: { type: mongoose.Schema.Types.ObjectId, ref: "Service" },
    CustomerId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" }
}, {
    timestamps: true
})
module.exports = mongoose.model('Rating', RatingSchema)