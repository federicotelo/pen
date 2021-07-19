const { Schema, model } = require('mongoose');

const datosSchema = new Schema({
   pais: String,
   codigo: String,
   info: Number

});

module.exports = model('Datos', datosSchema);