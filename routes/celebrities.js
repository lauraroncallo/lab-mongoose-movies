const router = require("express").Router();
const Celebrity = require('../models/Celebrity.model');


/* GET home page */

router.get("/celebrities", async (req, res, next) => {
    const celebrities = await Celebrity.find();
    console.log(celebrities);
    res.render("celebrities/index",{celebrities});
   });

router.get("/celebrities/:id", async (req,res)=> {
    const celebrity = await Celebrity.findById(req.params.id); // .populate adds the name of the author to the book
    res.render("celebrities/show", celebrity);
});

router.get("/new", async (req,res)=>{
    const celebrities = await Celebrity.find();
    res.render("celebrities/new", {celebrities});
}); 

router.post("/new", async (req, res)=>{

const {name, occupation, catchPhrase} = req.body;
await Celebrity.create({name, occupation, catchPhrase});
res.redirect("/celebrities");

});

router.get("/celebrities/:id/edit", async (req,res)=> {
    const celebrity= await Celebrity.findById(req.params.id);
    res.render("celebrities/edit", celebrity);
});


router.post("/celebrities/:id/edit", async (req,res)=>{
    const {name, occupation, catchPhrase} = req.body;
    await Celebrity.findByIdAndUpdate(req.params.id, {
        name, occupation, catchPhrase
    });
    res.redirect(`/celebrities/${req.params.id}`);
});


router.post("/celebrities/:id/delete", async (req,res)=>{
    await Celebrity.findByIdAndRemove(req.params.id);
    res.redirect("/celebrities");
});



module.exports = router;
