const express = require('express');
const mongoose = require('mongoose');
const app = express();
const router = require('./routes/facture.js');
app.use(express.json());

//Connection à la DB mongo
mongoose.connect('mongodb+srv://metarar22:root@cluster0.emfbmvg.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'))
;

//Definition d'une route
app.use('/api/factures', router);


module.exports = app
