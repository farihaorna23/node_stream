const fetch = require("isomorphic-fetch");
const fs = require("fs");
const path = require("path");

let toSrc = fs.createWriteStream(path.join(__dirname, "./temp.json"));
fetch(
  "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
)
  .then(res => res.text()) //converting into text we can write the data straight to the writeable stream
  .then(data => toSrc.write(data))
  .catch(err => console.error(err));

// fs.writeFile("./temp.json", getData, err => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log("Succesfully written");
//   }
// });
