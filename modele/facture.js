const mongoose = require('mongoose');

const factureSchema = new mongoose.Schema({
    productName: {type: String, required : true},
    description: {type: String, required : true},
    clientName: {type: String, required : true},
    total: {type: Number, required : true},
    statut: {type: String, required : true},
});

module.exports = mongoose.model('Facture', factureSchema);