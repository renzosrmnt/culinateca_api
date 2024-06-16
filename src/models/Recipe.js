import { Schema, model } from 'mongoose';

const RecipeSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  ingredients: { type: [String], required: true },
  steps: { type: [String], required: true },
  preparationTime: { type: String, required: true },
  servingSize: { type: String, required: true },
  imageUrl: { type: String },
  category: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default model('Recipe', RecipeSchema);
