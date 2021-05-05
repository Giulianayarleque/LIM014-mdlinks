/** @format */
const index = require("./index.js");
const opcions = require("./opcions.js");

module.exports = {
  mdlinks: (path, option = {}) =>
    new promise((resolve, reject) => {
      if (index.rutaExiste(path)) {
        const rutaAbsoluta = index.rutaAbsoluta(path);
        let objPath = [];
        if (!index.rutaArchivo(rutaAbsoluta)) {
          const archivos = index.leerDirectorio(rutaAbsoluta);
          archivos.forEach((file) => {
            const buscaLink = opcions.buscaLink(file);
            const datalinks = opcions.datalinks(buscaLink);
            objPath = [].concat(objPath, datalinks);
          });
          if (option.validate) {
            resolve(opcions.validateLinks(objPath));
          }
          resolve(objPath);
        }
        const links = opcions.buscaLink(rutaAbsoluta);
        const datalinks = opcions.datalinks(links);
        objPath = [].concat(objPath, datalinks);
        if (opcion.validate) {
          resolve(opcions.validateLinks(objPath));
        }
        resolve(objPath);
      } else {
        reject();
      }
    }),
};
