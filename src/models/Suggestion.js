import { Schema, model } from 'mongoose';

const SuggestionSchema = new Schema({
  type: { type: String, required: true }, // report, recommendation, request
  title: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default model('Suggestion', SuggestionSchema);