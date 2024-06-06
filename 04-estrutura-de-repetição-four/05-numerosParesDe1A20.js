// Exercício 5: Imprimindo Números Pares de 1 a 20

// Escreva uma função chamada printEvenNumbers que imprime todos os números pares de 1 a 20 usando um loop for.

//1.------------------
//
//  i = 1
//  1 % i(2) == 1   ===  impar, não imprime

//2.------------------
//
//  i = 2
//  i = 2 % (2) = 0  === par, imprime

//3.------------------
//
//  i == 3
//  3 % (2) == 1  === impar não imprime

//4.------------------
//
//  i == 4
//  4 % (2) == 0  === par, imprime

//Números pares impressos com a condiçao if() e usando % Resto da divião (modulo) = 0 para identificr o par

function printEvenNumbers() {
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

printEvenNumbers();

// Output:
// 2
// 4
// 6
// 8
// 10
// 12
// 14
// 16
// 18
// 20
