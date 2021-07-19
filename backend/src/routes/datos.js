const { Router } = require('express');
const router = Router();

const { obtenerDatos, crearDato, obtenerDato, borrarDato, actualizarDato } = require('../controllers/datos.controller');

router.route('/')
   .get(obtenerDatos)
   .post(crearDato);

router.route('/:id')
   .get(obtenerDato)
   .delete(borrarDato)
   .put(actualizarDato);

module.exports = router;


