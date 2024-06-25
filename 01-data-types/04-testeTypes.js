// Exercício 4: Operações Baseadas no Tipo de Dado

// Escreva uma função chamada testTypes que realiza operações diferentes baseadas no tipo de dado do valor passado.

function testTypes(valor) {
  let tipo = typeof valor;

  // console.log("tipo", tipo);
  // console.log("valor", valor);

  if (tipo === "string") {
    return "string";
  }
  if (tipo === "number") {
    return "number";
  }
  if (tipo === "boolean") {
    return "boolean";
  }
  if (tipo === "undefined") {
    return "undefined";
  }
  if (Array.isArray(valor)) {
    return "array";
  }

  if (valor instanceof Array) {
    return "array";
  }

  if (valor instanceof Date) {
    return "date";
  }

  if (tipo === "object") {
    return "object";
  }
}

console.log(testTypes("Ana"));
console.log(testTypes(1));
console.log(testTypes(true));
console.log(testTypes(undefined));
console.log(testTypes([]));
console.log(testTypes(new Date()));
console.log(testTypes({}));

// Output:
// string
// number
// boolean
// undefined
// array
// date
// object
