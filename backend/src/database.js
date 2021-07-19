const mongoose = require('mongoose');

// const URI = process.env.MONGOOSE_URI
//     ? process.env.MONGOOSE_URI
//     : 'mongodb://localhost/merndatabase';

mongoose.connect('mongodb+srv://root:root1234@cluster0.qewci.mongodb.net/Pen_BD?retryWrites=true&w=majority', {
   useNewUrlParser: true,
   useCreateIndex: true
});

const connection = mongoose.connection;

connection.once('open', () => {
   console.log('Base de Datos Pen_DB conectada');
});
