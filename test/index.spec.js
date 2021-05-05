const { existeRuta, convertirAbsoluta, validar } = require("../index.js");
const rutaAbsoluta = "D:\\LABORATORIA\\LIM-14\\LIM014-mdlinks\\doc\\Prueba.md";
const rutaRelativa = "doc\\Prueba.md";

describe("index", () => {
  test("Si la ruta es valida True", () => {
    expect(existeRuta(rutaAbsoluta)).toBe(true);
  });
});

describe("index", () => {
  test("Convertir ruta absoluta", () => {
    expect(convertirAbsoluta(rutaRelativa)).toBe(
      "D:\\LABORATORIA\\LIM-14\\LIM014-mdlinks\\doc\\Prueba.md"
    );
  });
});

describe("index", () => {
  it("función validar", () => {
    expect(typeof validar).toBe("function");
  });
});

it("Deberia retornar una ruta absoluta", () => {
  expect(
    validar("D:\\LABORATORIA\\LIM-14\\LIM014-mdlinks\\doc\\Prueba.md")
  ).toEqual("D:\\LABORATORIA\\LIM-14\\LIM014-mdlinks\\doc\\Prueba.md");
});
