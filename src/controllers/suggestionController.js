import Suggestion from '../models/Suggestion.js';

export async function getAllSuggestions(req, res) {
  try {
    const suggestions = await Suggestion.find();
    res.json(suggestions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function createSuggestion(req, res) {
  const { type, title, message } = req.body;
  const newSuggestion = new Suggestion({ type, title, message });
  try {
    const savedSuggestion = await newSuggestion.save();
    res.status(201).json(savedSuggestion);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

export async function deleteSuggestion(req, res) {
  try {
    const deletedSuggestion = await Suggestion.findByIdAndDelete(req.params.id);
    if (!deletedSuggestion) return res.status(404).json({ message: 'Suggestion not found' });
    res.json({ message: 'Suggestion deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
