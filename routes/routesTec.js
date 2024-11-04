const express = require('express');
const router = express.Router();
const tecnicoController = require('../controllers/tecnicoController');

// Ruta para agregar un tecnico
router.post('/', tecnicoController.addTecnico);

// Ruta para obtener todos los tecnicos
router.get('/', tecnicoController.getTec);

// Ruta para obtener un tecnico específico (por ID)
router.get('/:id', tecnicoController.getATec);

// Ruta para modificar un tecnico específico ( por ID)
router.patch('/:id', tecnicoController.updateTec);

// Ruta para modificar un tecnico específico ( por ID)
router.put('/:id', tecnicoController.updateTecPut);

// Ruta para eliminar un tecnico específico ( por ID)
router.delete('/:id', tecnicoController.deleteTec);

module.exports = router;
