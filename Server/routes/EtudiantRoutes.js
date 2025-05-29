const express=require('express');
const routes=express.Router();
const EtudiantControllers=require("../Controllers/EtudiantControllers");
routes.get('/etudiants',EtudiantControllers.getEtudiants);
routes.post('/etudiants',EtudiantControllers.postEtudiants);
routes.get('/etudiants/delete-etudiant/:id',EtudiantControllers.getDeleteEtudiant);
routes.post('/etudiants/update-etudiant/:id',EtudiantControllers.postUpdateEtudiant);
module.exports=routes;