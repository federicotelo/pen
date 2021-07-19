require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
require('./database');

// settings
app.set('port', process.env.PORT || 4000);

// middlewares 
app.use(cors());
app.use(express.json());

// routes
app.use('/api/datos', require('./routes/datos'));



async function main() {
   await app.listen(app.get('port'));
   console.log('Server on port', app.get('port'));
}

main();