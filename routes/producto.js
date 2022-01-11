//RUTAS PARA PRODUCTO

const express = require('express');

const router = express.Router();

const controller = require('../controllers/productoController');

router.post('/', controller.crearProducto);
router.get('/', controller.obtenerProductos);
router.put('/:id', controller.actualizarProducto);
router.get('/:id', controller.obtenerProducto);
router.delete('/:id', controller.borrarProducto);
module.exports = router;