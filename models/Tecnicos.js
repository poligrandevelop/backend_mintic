const mongoose = require("mongoose");

const tecnicoSchema = new mongoose.Schema({
    nombres: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    documento: {
        type: Number,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    telefono: {
        type: Number,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    proyecto: {
        type: String,
        required: true
    },
    zona: {
        type: Number,
        required: true
    }
}, { versionKey: false });

module.exports = mongoose.model('Tecnico', tecnicoSchema);