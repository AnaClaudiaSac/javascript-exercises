// Exercício 1: Dia da Semana
// Escreva uma função chamada dayOfWeek que recebe um número de 1 a 7 e imprime o dia da semana correspondente (1 para "Domingo", 2 para "Segunda-feira", etc.).

function dayOfWeek(day) {
  let result = null;

  switch (day) {
    case 1:
      result = "Domingo";
      break;
    case 2:
      result = "Segunda-feira";
      break;
    case 3:
      result = "Terça-feira";
      break;
    case 4:
      result = "Quarta-feira";
      break;
    case 5:
      result = "Quinta-feira";
      break;
    case 6:
      result = "Sexta-feira";
      break;
    case 7:
      result = "Sábado";
      break;
    default:
      break;
  }

  return result;
  
}

console.log(dayOfWeek(1));
console.log(dayOfWeek(4));
console.log(dayOfWeek(6));
console.log(dayOfWeek(7));

///Output:

// Domingo
// Quarta-feira
// Sexta-feira
// Sábado
