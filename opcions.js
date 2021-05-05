/** @format */

//modulo para usar fetch en node js
const fetch = require("node-fetch");
const index = require("./index.js");

module.exports = {
  buscaLink: (ruta) => {
    const buscaLinkRegExp = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    const contenidoArchivo = index.leerArchivo(ruta);
    //El método match() es un método de Stringstar que busca una coincidencia en una cadena de texto
    //y devuelve un array con información acerca de la coincidencia encontrada o null.
    const links = [contenidoArchivo.match(buscaLinkRegExp), ruta];
    return links;
  },
  datalinks: (arrayLinks) => {
    const array = [];
    arrayLinks[0].forEach((linkMd) => {
      // El método indexOf()devuelve el índice, dentro del objeto String que realiza la llamada, de la primera ocurrencia del valor especificado,
      const posicionLink = linkMd.indexOf("(");
      const primerPosicionTxt = linkMd.indexOf("[");
      const finPosicionTxt = linkMd.indexOf("]");
      const href = linkMd.slice(posicionLink + 1, -1);
      const text = linkMd.slice(primerPosicionTxt + 1, finPosicionTxt);
      const obj = {
        text,
        href,
        file: arrayLinks[1],
      };
      array.push(obj);
    });
    return array;
  },
  validateLinks: (propiedad) =>
    Promise.all(
      propiedad.map((obj, index) =>
        fetch(obj.href)
          .then((resp) => [index, resp.status])
          .catch(() => [index, 500])
      )
    )
      .then((responses) => {
        const linkObj = [];
        responses.forEach((element) => {
          linkObj.push({
            text: propiedad[element[0]].text,
            href: propiedad[element[0]].href,
            file: propiedad[element[0]].file,
            status: element[1],
          });
        });
        return linkObj;
      })
      .catch(() => []),
};
