const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
require('dotenv').config();

const app = express();
app.use(express.json());

// Rutas
app.use('/auth', authRoutes);

// Conexión a MongoDB y inicio del servidor
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(3000, () => console.log('Servidor ejecutándose en puerto 3000')))
    .catch((err) => console.error('Error al conectar a MongoDB:', err));
