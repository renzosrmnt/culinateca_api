import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './config/db.js'; // Asegúrate de que la extensión .js está presente
import {URL, PORT, DB_DATABASE, DB_PORT, DB_HOST} from './config/config.js'

import recipes from './routes/recipes.js';
import suggestions from './routes/suggestions.js';
import cors from 'cors'

const app = express();
app.use(cors());

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
