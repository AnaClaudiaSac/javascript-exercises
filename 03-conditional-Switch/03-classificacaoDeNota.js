// Exercício 3: Classificação de Nota

// Escreva uma função chamada gradeClassification que recebe uma nota (A, B, C, D ou F) e imprime uma descrição correspondente ("Excelente" para A, "Bom" para B, etc.).

function gradeClassification(grade) {
  let result = null;

  switch (grade) {
    case "A":
      result = "Excelente";
      break;
    case "B":
      result = "Otímo";
      break;
    case "C":
      result = "Bom";
      break;
    case "D":
      result = "Ruim";
      break;
    case "F":
      result = "Péssimo";
      break;
    default:
      result = "Nota não registrada"
      break;
  }

  return result

}


console.log(gradeClassification("A"))
console.log(gradeClassification("B"))
console.log(gradeClassification("C"))
console.log(gradeClassification("D"))
console.log(gradeClassification("F"))
console.log(gradeClassification("G"))

// Output:
// Excelente
// Otímo
// Bom
// Ruim
// Péssimo
//Nota não registrada