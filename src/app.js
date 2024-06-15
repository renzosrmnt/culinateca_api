import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './config/db.js'; // Asegúrate de que la extensión .js está presente

import recipes from './routes/recipes.js';
import suggestions from './routes/suggestions.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Conexión a MongoDB
connectDB();

// Rutas
app.use('/api/recipes', recipes);
app.use('/api/suggestions', suggestions);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
