import express from 'express';
import { getAllSuggestions, createSuggestion, deleteSuggestion } from '../controllers/suggestionController.js';

const router = express.Router();

router.get('/', getAllSuggestions);
router.post('/', createSuggestion);
router.delete('/:id', deleteSuggestion);

export default router;
