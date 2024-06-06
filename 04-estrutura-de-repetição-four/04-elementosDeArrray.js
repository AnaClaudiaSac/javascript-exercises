// Exercício 4: Imprimindo Elementos de um Array

// Escreva uma função chamada printArrayElements que recebe um array e imprime cada elemento do array usando um loop for.

function printArrayElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

printArrayElements(arr);

// Output:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
