// Exercício 3: Comparação de Três Números

// Escreva uma função chamada findLargest que recebe três números e imprime qual deles é o maior. Se houver números iguais, imprima "Números iguais".

function findLargest(num1, num2, num3) { 
  if (num1 === num2 && num1 === num3){
    console.log("Numeros iguais")
  } else if(num1 > num2 && num1 > num3){
    console.log(" O numero", num1, 'é Maior')
  } else if(num2 > num1 && num2 > num3){
    console.log("O numero", num2, "é Maior")
  }else{
    console.log("O numero", num3, "é Maior")
  }
}

findLargest(40, 20, 10)
findLargest(20, 80, 12)
findLargest(10, 40, 100)

// Output:
// O numero 40 é Maior
// O numero 80 é Maior
// O numero 100 é Maior