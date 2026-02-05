const express = require('express')
const recipeController = require('../controller/recipeController')
const userController = require('../controller/userController')
const jwtMiddleware = require('../middleware/jwtMiddleware')
const downloadController = require('../controller/downloadController')
const saveController = require('../controller/saveController')
const feedbackController = require('../controller/feedbackController')
const multerMiddleware = require('../middleware/multerMidlleware')
const adminMiddleware = require('../middleware/adminMiddleware')


const router = new express.Router()

// get all recipes
router.get('/recipes',recipeController.getAllRecipesController)

// register
router.post('/register',userController.registerController)

// login
router.post('/login',userController.loginController)

// add feedback
router.post('/feedback',feedbackController.addToFeedbackController)

// get approve feeedback
router.get('/feedbacks-approve',feedbackController.getApproveFeedbackController)

// ------------------Authorised User -------------------


// view recipe
router.get('/recipes/:id',jwtMiddleware,recipeController.viewRecipesController)

// related recipe
router.get('/related-recipes',jwtMiddleware,recipeController.relatedRecipesController)

// add to download
router.post('/downloads/:id',jwtMiddleware,downloadController.addToDownloadsController)

// add to save
router.post('/recipes/:id/save',jwtMiddleware,saveController.addToSaveRecipeController)

// get user save recipe
router.get('/recipe-collection',jwtMiddleware,saveController.getUserRecipeController)

// remove user save recipe
router.delete('/recipe-collection/:id',jwtMiddleware,saveController.removeUserRecipeController)

// get user download recipe list
router.get('/user-downloads',jwtMiddleware,downloadController.getUserDownloadListController)

// edit user picture 
router.put('/user-edit',jwtMiddleware,multerMiddleware.single('picture'),userController.editUserPictureController)

// get user list
router.get('/user-list',adminMiddleware,userController.getAllUserController)

// get download recipe list
router.get('/downloads',adminMiddleware,downloadController.getDownloadListController)

// get all feedback list
router.get('/feedbacks',adminMiddleware,adminMiddleware,feedbackController.getAllFeedbackController)

// update feedback
router.put('/feedbacks/:id',adminMiddleware,feedbackController.updateFeedbackStatusController)

// add recipe
router.post('/recipes',adminMiddleware,recipeController.addRecipesController)

// delete recipe
router.delete('/recipes/:id',adminMiddleware,recipeController.removeRecipeController)

// edit recipe
router.put('/recipes/:id',adminMiddleware,recipeController.editRecipeController)



module.exports = router