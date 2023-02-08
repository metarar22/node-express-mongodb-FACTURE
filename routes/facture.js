const express = require('express');

const router = express.Router();

const factureController = require('../controllers/facture');

//Requete POST
router.use(express.json());

router.post('/', factureController.createFacture);

//Requete GET
router.get('/', factureController.getAllFacture);


//GET BY ID
router.get('/:id', factureController.getFacturebyId);

//GET BY Client name
router.get('/client/:clientName', factureController.getFacturebyCname);

//GET by Statut
router.get('/statut/:statut', factureController.getFacturebyStatut);

//Delete
router.delete('/:id', factureController.deleteFacture);

//Put
router.put('/:id', factureController.updateFacture);

module.exports = router;