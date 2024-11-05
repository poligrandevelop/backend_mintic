const mongoose = require('mongoose');
require('dotenv').config();

// Conectar a MongoDB

const conectionDB=()=>{
    mongoose
    .connect(process.env.DB_MONGO)
    .then(()=> console.log('conexion exitosa'))
    .catch((error)=> console.log(error));
}

module.exports = conectionDB;
