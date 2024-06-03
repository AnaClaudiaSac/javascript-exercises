// Exercício 2: Estações do Ano
// Escreva uma função chamada seasonOfYear que recebe um mês (representado por um número de 1 a 12) e imprime a estação correspondente (por exemplo, 1 para "Inverno", 4 para "Primavera", etc.).

function seasonOfYear(month) {
  let result = null;

  switch (month) {
    case 1:
    case 2:
    case 3:
      result = "Inverno";
      break;
    case 5:
    case 6:
    case 7:
      result = "Primavera";
      break;
    case 8:
    case 9:
    case 10:
      result = "Verão";
      break;
    case 11:
    case 12:
      result = "Outono";
      break;
    default:
      result = "Não é um mês válido";
      break;
  }

  return result;

}


console.log(seasonOfYear(2));
console.log(seasonOfYear(6));
console.log(seasonOfYear(10));
console.log(seasonOfYear(12));
console.log(seasonOfYear(16));

// Output:
// Inverno
// Primavera
// Verão
// Outono
// Não é um mês válido