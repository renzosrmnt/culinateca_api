import express from 'express';
import { getAllRecipes, getRecipeById, createRecipe, updateRecipe, deleteRecipe, searchRecipes, getNewestRecipes, getRandomRecipes } from '../controllers/recipeController.js'; // Asegúrate de incluir .js

const router = express.Router();

router.get('/search', searchRecipes);
router.get('/newest', getNewestRecipes);
router.get('/random', getRandomRecipes);
router.get('/:id', getRecipeById); 

router.get('/', getAllRecipes);
router.post('/', createRecipe);
router.put('/:id', updateRecipe);
router.delete('/:id', deleteRecipe);


export default router;
