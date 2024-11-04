const mongoose = require("mongoose");

const productosSchema = new mongoose.Schema({
    Producto: {
        type: String,
        required: true
    },
    Preoveedor: { 
        type: String,
        required: true
    },
    UnidadesDisponibles: {
        type: Number,
        required: true
    },
    ubicacionAlmacen: {
        type: String,
        required: true
    },
    serial: {
        type: String,
        required: true
    },
    fechaCompra: {
        type: Date,
        required: true
    }
}, { versionKey: false });

module.exports = mongoose.model('Productos', productosSchema);
