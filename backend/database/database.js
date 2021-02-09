const mongoose = require('mongoose');

const URI="mongodb+srv://moviesApi:mWliRH6gV8qjG52g@cluster0.oykok.mongodb.net/test";//MI BASE DE DATOS
mongoose.connect(URI,{ useNewUrlParser: true ,useUnifiedTopology: true })//ME CONECTO A MI URI
    .then(db=> console.log('DB conectada'))
    .catch(err=> console.error(err));

    module.exports=mongoose;