const Etudiant=require('../models/Etudiants');
exports.getEtudiants=(req,res,next) => {
    Etudiant.findAll().then(datas =>
        res.json(datas)
    ).catch(err => res.json(err));
}
exports.postEtudiants=(req,res,next) => {
    datas=JSON.parse(Object.keys(req.body))
    const CNE=datas["CNE"];
    const nom=datas["nom"];
    const prenom=datas["prenom"];
    const email=datas["email"];
    const tel=datas["tel"];
    const genre=datas["genre"];
    const ville=datas["ville"];
    console.log(CNE,nom,prenom,email,tel,genre,ville)
    Etudiant.create({
        CNE,nom,prenom,email,tel,genre,ville
    }).then(result =>
        res.json(result)
    ).catch(err => res.json(err));
}
exports.getDeleteEtudiant=(req,res,next) => {
    const id=req.params.id;
    Etudiant.destroy({where:{id}}).then(data => res.json(data)).catch(err => res.json(err));
}
exports.postUpdateEtudiant=(req,res,next) => {
    const id=req.params.id;
    datas=JSON.parse(Object.keys(req.body))
    const CNE=datas["CNE"];
    const nom=datas["nom"];
    const prenom=datas["prenom"];
    const email=datas["email"];
    const tel=datas["tel"];
    const genre=datas["genre"];
    const ville=datas["ville"];
    Etudiant.findByPk({id}).then(etudiant => {
        etudiant.CNE=CNE;
        etudiant.nom=nom;
        etudiant.prenom=prenom;
        etudiant.email=email;
        etudiant.tel=tel;
        etudiant.genre=genre;
        etudiant.ville=ville;
        etudiant.save().then(result => res.json(result)).catch(err => res.json(err))
    }).then(result => res.json(result)).catch(err => res.json(err))
}