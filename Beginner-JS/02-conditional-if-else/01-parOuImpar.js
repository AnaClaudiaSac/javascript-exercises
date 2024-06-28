// Exercício 1: Verificação de Número Par ou Ímpar

// Escreva uma função chamada isEvenOrOdd que recebe um número e imprime "Par" se o número for par e "Ímpar" se for ímpar.

//   function isEvenOrOdd(number) {
//     if (number % 2 === 0) {
//         console.log("Par")
//     } else {
//         console.log("Ímpar")
//     }
// }

// isEvenOrOdd(4)
// isEvenOrOdd(7)
// isEvenOrOdd(10)
// isEvenOrOdd(15)

//------------------------------------------

function isEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "Par"
  } else {
    return "Ímpar"
  }
}

console.log(isEvenOrOdd(2))
console.log(isEvenOrOdd(6))
console.log(isEvenOrOdd(12))
console.log(isEvenOrOdd(17))

// Output:
// Par
// Ímpar
// Par
// Ímpar
