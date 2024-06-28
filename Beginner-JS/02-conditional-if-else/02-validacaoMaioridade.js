// Exercício 2: Verificação de Maioridade

// Escreva uma função chamada checkAge que recebe a idade de uma pessoa e imprime "Maior de idade" se a pessoa tiver 18 anos ou mais e "Menor de idade" caso contrário.

function checkAge(age) {
  if (age >= 18) {
      console.log("Maior de idade")
  } else {
      console.log("Menor de idade")
  }
}

checkAge(20)
checkAge(17)
checkAge(18)
checkAge(15)

// Output:
// Maior de Idade
// Menor de idade
// Maior de Idade
// Menor de idade
//-------------------------------------------

// function checkAge(age) {
//   if (age >= 18) {
//       return "Maior de idade"
//   } else {
//       return "Menor de idade"
//   }
// }

// console.log(checkAge(10))
// console.log(checkAge(17))
// console.log(checkAge(18))
// console.log(checkAge(16))