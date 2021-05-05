/** @format */

//Path => nos ayuda a manipular rutas (resolver)
const path = require("path");
//fs => Para manipular o crear archivos los archivos
const fs = require("fs");

//function exportar
module.exports = {
  //funcion existe ruta El método fs.existsSync () se usa para verificar sincrónicamente si un archivo ya existe en la ruta dada o no,
  //retorna booleano
  rutaExiste: (ruta) => fs.existsSync(ruta),
  //funcion ruta absoluta El método path.isAbsolute () se usa para verificar si la ruta dada es una ruta absoluta o no

  rutaAbsoluta: (ruta) => {
    if (path.isAbsolute(ruta) === false) {
      return path.resolve(ruta);
    }
    //return ruta;
  },

  rutaArchivo: (ruta) => fs.existsSync(ruta).isfile(),

  leerDirectorio: function leerDirectorio(ruta) {
    let caminos = [];
    if (fs.existsSync(ruta).isDirectory()) {
      const archivos = fs.readdirSync(ruta);
      archivos.forEach((archivo) => {
        const nuevoCamino = leerDirectorio(`${ruta}/${archivo}`);
        caminos = caminos.concat(nuevoCamino);
      });
    }

    if (path.extname(ruta) === ".md") {
      caminos.push(`${ruta}`);
    }
    return caminos;
  },

  leerArchivo: (ruta) => fs.readFileSync(ruta, "utf8"),
};
