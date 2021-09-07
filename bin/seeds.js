require("../db")
const Celebrity = require("../models/Celebrity.model");

const celebrities = [
    {
      name: "juan",
      occupation: "singer",
       catchPhrase: "whatever",
    },
    {
        name: "juan",
        occupation: "singer",
         catchPhrase: "whatever",
    },
    {
        name: "juan",
      occupation: "singer",
       catchPhrase: "whatever",
    },
];

  
Celebrity.insertMany(celebrities).then((celebritiesFromDB) => {
    console.log(`Celebrities created - ${celebritiesFromDB.length}`);
});