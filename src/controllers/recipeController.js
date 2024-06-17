import Recipe from '../models/Recipe.js';

export async function getAllRecipes(req, res) {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function getRecipeById(req, res) {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
    res.json(recipe);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function createRecipe(req, res) {
  const { title, description, ingredients, steps, preparationTime, servingSize, imageUrl, category } = req.body;
  const newRecipe = new Recipe({ title, description, ingredients, steps, preparationTime, servingSize, imageUrl, category });
  try {
    const savedRecipe = await newRecipe.save();
    res.status(201).json(savedRecipe);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

export async function updateRecipe(req, res) {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedRecipe) return res.status(404).json({ message: 'Recipe not found' });
    res.json(updatedRecipe);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

export async function deleteRecipe(req, res) {
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!deletedRecipe) return res.status(404).json({ message: 'Recipe not found' });
    res.json({ message: 'Recipe deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function searchRecipes(req, res) {
  const { title, category, ingredients } = req.query;
  const query = {};

  if (title) {
    query.title = { $regex: title, $options: 'i' };
  }

  if (category) {
    query.category = category;
  }

  if (ingredients) {
    query.ingredients = { $in: ingredients.split(',') };
  }

  try {
    const recipes = await Recipe.find(query);
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function getNewestRecipes(req, res) {
  try {
    const recipes = await Recipe.find().sort({ createdAt: -1 }).limit(5);
    res.json(recipes);
  } catch (err) { 
    res.status(500).json({ message: err.message });
  }
}

export async function getRandomRecipes(req, res) {
  try {
    const recipes = await Recipe.aggregate([{ $sample: { size: 5 } }]);
    res.json(recipes);
  } catch (err) { 
    res.status(500).json({ message: err.message });
  }
}

export async function getRecipesByPage(req, res) {
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 10;

  try {
    const recipes = await Recipe.find()
      .skip((page - 1) * pageSize)
      .limit(pageSize);

    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
