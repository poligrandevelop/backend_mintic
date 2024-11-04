const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

// Ruta para agregar un cliente
router.post('/', clienteController.addClient);

// Ruta para obtener todos los clientes
router.get('/', clienteController.getCli);

// Ruta para obtener un cliente específico (por ID)
router.get('/:id', clienteController.getACli);

// Ruta para modificar un cliente específico ( por ID)
router.patch('/:id', clienteController.updateCli);

// Ruta para modificar un cliente específico ( por ID)
router.put('/:id', clienteController.updateCliPut);

// Ruta para eliminar un cliente específico ( por ID)
router.delete('/:id', clienteController.deleteCli);

module.exports = router;
