/** @format */

const mdLinks = require("./md-links.js");
const { links } = require("./opcions.js");
//const { rutaExiste, rutaAbsoluta } = require("./index.js");
const index = require("./index.js");
const opcions = require("./opcions.js");

const rutaPrueba = "D:\\LABORATORIA\\LIM-14\\LIM014-mdlinks\\doc\\Prueba.md";
const rutaRelativa = "doc\\Prueba.md";
const otraRuta = "D:\\LABORATORIA\\LIM-14\\LIM014-mdlinks\\README.md";

console.log(index.rutaExiste(rutaPrueba));

console.log(index.rutaAbsoluta(rutaRelativa));

console.log(index.rutaArchivo);

console.log(index.leerDirectorio);

console.log(index.leerArchivo(rutaPrueba));

console.log(opcions);
console.log(opcions.buscaLink(otraRuta));
//console.log(index);
// mdlinks(pruebaRuta)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//console.log(mdLinks)
//console.log(buscaLink)
//console.log(links("D:\\LABORATORIA\\LIM-14\\LIM014-mdlinks\\doc\\Prueba.md"))
//console.log(mdLinks);
