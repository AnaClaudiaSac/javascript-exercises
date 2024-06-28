// Exercício 5: Verificação de Valores Falsy e Truthy
// Escreva uma função chamada isTruthy que recebe um valor e retorna true se o valor for truthy e false se for falsy.
// Truthy
// Em JavaScript, um valor truthy é um valor que se traduz em verdadeiro quando avaliado em um contexto Booleano. Todos os valores são truthy a menos que eles sejam definidos como falsy (ou seja., exceto para false, 0, "", null, undefined, e NaN).

function isTruthy(value) { 
  return !!value
}

console.log(isTruthy(true))   
console.log(isTruthy(false))
console.log(isTruthy(1));       
console.log(isTruthy(0));       
console.log(isTruthy("hello")) 
console.log(isTruthy(""));      
console.log(isTruthy(null))
console.log(isTruthy(undefined))
console.log(isTruthy(NaN))   
console.log(isTruthy([]))    
console.log(isTruthy({}))
console.log(isTruthy(Infinity))     


//Output:
// true
// false
// true 
// false
// true
// false
// false
// false
// false
// true
// true
// true