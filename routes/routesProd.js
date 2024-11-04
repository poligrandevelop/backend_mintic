const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');

// Ruta para agregar un productos
router.post('/', productosController.addProd);

// Ruta para obtener todos los productos
router.get('/', productosController.getProduc);

// Ruta para obtener un productos específico (por ID)
router.get('/:id', productosController.getAProduc);

// Ruta para modificar un productos específico ( por ID)
router.patch('/:id', productosController.updateProduc);

// Ruta para modificar un productos específico  con put( por ID)
router.put('/:id', productosController.updateProducPut);

// Ruta para eliminar un productos específico ( por ID)
router.delete('/:id', productosController.deleteProduc);

module.exports = router;