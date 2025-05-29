const expess=require('express');
const app=expess();
const bodyParser=require('body-parser');
const cors=require('cors')
const sequelize=require('./db');
const EtudiantRoutes=require('./routes/EtudiantRoutes');
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
app.use(EtudiantRoutes);
sequelize.sync().then(res => {
    app.listen(3000,() => console.log("Server listening"))
}).catch(err => console.log(err));



