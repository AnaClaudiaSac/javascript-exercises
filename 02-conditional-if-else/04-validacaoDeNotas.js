// Exercício 4: Verificação de Nota

// Escreva uma função chamada gradeResult que recebe uma nota (0 a 100) e imprime "Aprovado" se a nota for maior ou igual a 60 e "Reprovado" caso contrário.

function gradeResult(grade) {
  if(grade >= 60){
    console.log("Aprovado")
  }else{
    console.log("Reprovado")
  }
 }

 gradeResult(80)
 gradeResult(40)
 gradeResult(100)
 gradeResult(60)

// Output:
// Aprovado
// Reprovado
// Aprovado
// Aprovado