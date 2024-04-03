const Rating=require('../Models/RatingSchema')
exports.addrating=(req,res)=>{
    const rating=new Rating({
        Rating:req.body.Rating,
        Comment:req.body.Comment,
        ServiceId: req.body.ServiceId,
        CustomerId: req.body.CustomerId,
    })
    rating.save()
    .then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        res.status(500).send(err)
    });
}