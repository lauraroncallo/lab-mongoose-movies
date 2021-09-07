const router = require("express").Router();
const Movie = require('../models/Movie.model');

router.get("/movie/new", (req,res)=>{
    res.render("movies/new-movie");
});

router.post("/movie/new", async (req,res)=>{
    const {title, genre, plot, cast} = req.body;
    await Movie.create({
       title,
       genre, 
       plot, 
       cast,
    });
    res.redirect("/movies");
});



module.exports = router;
