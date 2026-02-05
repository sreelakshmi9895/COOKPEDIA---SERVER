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

// get approve feedback
exports.getApproveFeedbackController = async (req,res)=>{
    console.log("Inside getApproveFeedbackController");
    try{
    // get approve
    const approveFeedback = await feedbacks.find({
        status:{$eq:'approve'}
    })
    res.status(200).json(approveFeedback)
    }catch(error){
        console.log(error);
        res.status(500).json(error)
    }
}

// // get all feedback
exports.getAllFeedbackController = async (req,res)=>{
    console.log("Inside   getAllFeedbackController");
    try{
    // get approve
    const allFeedbacks = await feedbacks.find()
    res.status(200).json(allFeedbacks)
    }catch(error){
        console.log(error);
        res.status(500).json(error)
    }
}

// update feedback status
exports.updateFeedbackStatusController = async (req,res)=>{
    console.log("Inside   updateFeedbackStatusController");
    const {id} = req.params
    const {status} = req.body
    try{
    // get feedback
    const existingFeedback = await feedbacks.findById({_id:id})
    existingFeedback.status = status  
    await existingFeedback.save()
    res.status(200).json(existingFeedback)
    }catch(error){
        console.log(error);
        res.status(500).json(error)
    }
}