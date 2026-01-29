const express = require('express')
const recipeController = require('../controller/recipeController')
const userController = require('../controller/userController')
const jwtMiddleware = require('../middleware/jwtMiddleware')
const downloadController = require('../controller/downloadController')
const saveController = require('../controller/saveController')
const feedbackController = require('../controller/feedbackController')


const router = new express.Router()

// get all recipes
router.get('/recipes',recipeController.getAllRecipesController)

// register
router.post('/register',userController.registerController)

// login
router.post('/login',userController.loginController)

// add feedback
router.post('/feedback',feedbackController.addToFeedbackController)

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


module.exports = router