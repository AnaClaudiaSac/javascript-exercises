// Exercício 2: Conversão para String

// Escreva uma função chamada convertToString que recebe um valor de qualquer tipo e o converte para uma string.

function convertToString(valor) { 
  if(typeof valor === 'object'){
    return JSON.stringify(valor)
  }
 
  return String(valor);

  
}

console.log(convertToString(123))
console.log(convertToString(true))
console.log(convertToString(null))
console.log(convertToString(undefined))
console.log(convertToString({key:'valor'}))
console.log(convertToString([1, 2, 3]))

//Resposta:

// 123
// true
// null
// undefined
// [object Object]
// 1,2,3
