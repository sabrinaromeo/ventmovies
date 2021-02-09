const mongoose = require('mongoose');
const {Schema} = mongoose;


//esquema de peliculas
const MovieSchema = new Schema({
    title:{ type: String, required: true },
    synopsis:{ type: String, required: true},
    year:{ type: Number, required: true},
    image:{ type: String, required: false},
});

module.exports = mongoose.model('Movie', MovieSchema);