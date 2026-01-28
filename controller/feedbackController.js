const feedbacks = require('../model/feedbackModel')

// add to feedback
exports.addToFeedbackController = async (req,res)=>{
    console.log("Inside addToFeedbackController");
    const {name,email,message} = req.body
    try{
    // add to model
    const newFeedback = await feedbacks.create({
        name,email,message
    })
    res.status(200).json(newFeedback)
    }catch(error){
        console.log(error);
        res.status(500).json(error)
    }
}