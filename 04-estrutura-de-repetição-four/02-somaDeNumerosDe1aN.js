// Exercício 2: Soma de Números de 1 a N

// Escreva uma função chamada sumToN que recebe um número n e retorna a soma de todos os números de 1 a n usando um loop for.


// 1.--------

// n   = 4    
// i   = 1         
// sum = 0 + i(1) = 1

// 2.--------

// n   = 4    
// i   = 2         
// sum = 1 + i(2) = 3

// 3.--------

// n   = 4    
// i   = 3         
// sum = 3 + i(3) = 6

// 4.--------

// n   = 4    
// i   = 4         
// sum = 6 + i(4) = 10


// 5.--------

// n   = 4    
// i   = 5         
// sum = 10 + i(5) = 15


// 6.--------

// n   = 4    
// i   = 6        
// sum = 15 + i(6) = 21

// 6.--------
// n   = 4    
// i   = 7       
// sum = 21 + i(7) = 28



function sumToN(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum = sum + i;
   //console.log(i);
     //console.log(n)
     console.log(sum)
  }

  return sum;
}

sumToN(4);
