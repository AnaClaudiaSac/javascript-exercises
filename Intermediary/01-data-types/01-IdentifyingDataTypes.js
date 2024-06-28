// 1 - Identificando Tipos de Dados:
// Crie uma função que receba um valor como argumento e retorne uma string que indique o tipo de dado do valor (número, string, booleano, objeto, array ou indefinido). Utilize typeof e testes condicionais para identificar o tipo.

// Teste a função com diferentes tipos de valores, como:

// 123 (número)
// "Olá" (string)
// true (booleano)
// { nome: "João" } (objeto)
// [1, 2, 3] (array)
// undefined

//O operador typeof retorna uma string indicando o tipo de um operando.


function identifyType(valor) {

  if (typeof valor === "number") {
    return "number";
  }

  if (typeof valor === "string") {
    return "string";
  }

  if (typeof valor === "boolean") {
    return "boolean";
  }

  if (typeof valor === "function") {
    return "function";
  }

  if (typeof valor === 'undefined') {
    return "undefined";
  }

  if (valor === null) {
    return "null";
  }

  if (typeof valor === "object") {
    if (valor instanceof Array) return "array";

    if (valor instanceof Date) return "date";
  }

  return typeof valor;
}

console.log(identifyType(1))
console.log(identifyType("Ana"))
console.log(identifyType(true))
console.log(identifyType(function valor() {}))
console.log(identifyType({ nome: "Ana" })); 
console.log(identifyType([1, 2]));
console.log(identifyType(new Date()));
console.log(identifyType(undefined));
console.log(identifyType(null));


//Output:
// number
// string
// boolean
// function
// object
// array
// date
// undefined
// null