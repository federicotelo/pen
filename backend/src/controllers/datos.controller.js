const datosCtrl = {};

const Datos = require('../models/Datos');

datosCtrl.obtenerDatos = async (req, res) => {
   const datos = await Datos.find();
   res.json(datos);
};

datosCtrl.crearDato = async (req, res) => {
   const { pais, codigo, date, info } = req.body;

   const newDato = new Datos({
      pais,
      codigo,
      info

   });
   console.log(newDato)
   await newDato.save();
   res.json({ msg: 'Nuevo Dato Guardado' });
};

datosCtrl.obtenerDato = async (req, res) => {
   const dato = await Datos.findById(req.params.id);
   res.json(dato);
}

datosCtrl.borrarDato = async (req, res) => {
   await Datos.findByIdAndDelete(req.params.id)
   res.json('Dato Borrado');
}

datosCtrl.actualizarDato = async (req, res) => {
   const { pais, codigo, date, info } = req.body;
   await Datos.findByIdAndUpdate(req.params.id, {
      pais,
      codigo,
      date,
      info
   });
   res.json('Nota ACtualizada');
}

module.exports = datosCtrl;