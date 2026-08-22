require('dotenv').config(); // Carga las variables de entorno del archivo .env

const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Configuración de la base de datos usando .env
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Ruta para obtener los lugares turísticos
app.get('/api/lugares', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM lugares');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener los lugares' });
  }
});

// Ruta para obtener los hoteles
app.get('/api/hoteles', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM hoteles');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener los hoteles' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});