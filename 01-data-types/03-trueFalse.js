// Exercício 3: Comparação de Tipos de Dados

// Crie uma função chamada compareTypes que recebe dois valores e retorna true se ambos forem do mesmo tipo e false caso contrário.

function compareTypes(value1, value2) { 
 return typeof value1 === typeof value2

}

console.log(compareTypes(42, 'hello'))
console.log(compareTypes(42, 23))
console.log(compareTypes('hello', 'world'))
console.log(compareTypes(true, false))
console.log(compareTypes({}, []))


//Resposta:

// false
// true
// true
// true
// true