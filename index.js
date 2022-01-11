const express = require('express');
const cors = require('cors');
const res = require('express/lib/response');
const conectarDB = require('./config/db');
const app = express();

//Conectamos a la db
conectarDB();
app.use(cors());
app.use(express.json());
//Rutas
app.use('/api/productos', require('./routes/producto'))

app.listen(4000, ()=> {
    console.log('El servidor esta corriendo');
});