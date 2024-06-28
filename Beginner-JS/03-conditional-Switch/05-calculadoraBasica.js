// Exercício 5: Calculadora Básica

// Escreva uma função chamada basicCalculator que recebe três parâmetros: dois números e uma string representando a operação ("+", "-", "*", "/"). Use um switch para executar a operação correspondente e imprimir o resultado.

function basicCalculator(num1, num2, operation) {
  let result = 0;

  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2
      break;
    default:
      result = "Operação não encontrada, tente novamente!";
      break;
  }

  return result;

}

console.log(basicCalculator(2, 2, "+"));
console.log(basicCalculator(4, 2, "-"));
console.log(basicCalculator(2, 2, "*"));
console.log(basicCalculator(8, 2, "/"));
console.log(basicCalculator(2 % 2))


// Outuput;
// 4
// 2
// 4
// 4
// Operação não encontrada, tente novamente!