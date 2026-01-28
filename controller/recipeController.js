const recipes = require('../model/recipeModel')

// get all recipes
exports.getAllRecipesController = async (req,res)=>{
    console.log("Inside getAllRecipesController");
    try{
  const allRecipes = await recipes.find()
  res.status(200).json(allRecipes)
    }catch(error){
        console.log(error);
        res.status(500).json(error)
    }
    
}

// view recipe
exports.viewRecipesController = async (req,res)=>{
    console.log("Inside viewRecipesController");
    const {id} = req.params
    try{
  const viewRecipes = await recipes.findById({_id:id})
  res.status(200).json(viewRecipes)
    }catch(error){
        console.log(error);
        res.status(500).json(error)
    }
    
}

// related recipe
exports.relatedRecipesController = async (req,res)=>{
    console.log("Inside relatedRecipesController");
    const cuisine = req.query.cuisine
    try{
  const allRecipes = await recipes.find({cuisine})
  res.status(200).json(allRecipes)
    }catch(error){
        console.log(error);
        res.status(500).json(error)
    }
    
}