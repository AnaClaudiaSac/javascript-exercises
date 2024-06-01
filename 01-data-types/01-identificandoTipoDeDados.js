//1 - Escreva uma função chamada identifyType que recebe um valor e retorna uma string indicando o tipo de dado desse valor. Use o operador typeof.

function identifyType(valor) {

  if (valor instanceof Array) {
    return "Array";
  }

  if (valor instanceof Date){
    return "Date"
  }

  if (valor === null){
    return 'null'
  }

  return typeof valor;
}

console.log(identifyType("Ana"))
console.log(identifyType(11))
console.log(identifyType(true))
console.log(identifyType([1, 2]))
console.log(identifyType({}))
console.log(identifyType(undefined))
console.log(identifyType(null))
console.log(identifyType(new Date()))
console.log(identifyType(BigInt(46)))
console.log(identifyType(function valor(){}))

/* Output
  
string
number
boolean
Array
object
undefined
null
Date
bigint
function
*/