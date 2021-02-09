const express = require('express');//para crear rutas
const router = express.Router();//metodo que me devuelve un objeto en el que puedo ingresar rutas y lo exporto

const Movie = require('../models/models');


router.get('/', async (req,res)=>{
    const movies= await Movie.find();
    console.log(movies);
    res.json(movies);
    
});

router.get('/:id', async (req,res)=>{
    const movie= await Movie.findById(req.params.id);
    res.json(movie);

});

router.post('/', async (req,res)=>{
    const {title,synopsis,year,image} = req.body;
    const movie=new Movie({title,synopsis,year,image});
    await movie.save();
    res.json({status:'task saved', movie});
    });

    router.put('/:id', async (req,res)=>{
        const {title,synopsis,year} = req.body;
        const newMovie={title,synopsis,year};
        await Movie.findByIdAndUpdate(req.params.id, newMovie);
        res.json({status: 'Pelicula actualizada',newMovie});
    })

  /*  router.put('/:id', async (req,res)=>{
        //const {title,synopsis,year} = req.body;
        const newMovie={
            _id: req.params.id,
            title: req.body.title,
            synopsis: req.body.synopsis,
            year: req.body.year
        };
        await Movie.findByIdAndUpdate(req.params.id, newMovie);
        res.json({status: 'Pelicula actualizada',newMovie});
    })*/



    router.delete('/:id', async (req,res)=>{
        await Movie.findByIdAndRemove(req.params.id);
        res.json({status: 'Pelicula Eliminada'});
    })



module.exports = router;
