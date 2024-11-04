const express = require('express')
const cors = require('cors')
const bodyParser= require('body-parser')
const connectionDB = require('../config/db')
const app = express()
const port = process.env.PORT ||3000

require('dotenv').config()
connectionDB();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json())
app.use('/api/clientes', require('../routes/routesCli'));
app.use('/api/productos', require('../routes/routesProd'));
app.use('/api/user', require('../routes/authController'));
app.use('/api/tecnicos', require('../routes/routesTec'));

app.get('/', (req, res) => res.send('Hola Programador!'));
app.listen(port, () => console.log(`El servidor se está conectando por el puerto ${port}!`));

