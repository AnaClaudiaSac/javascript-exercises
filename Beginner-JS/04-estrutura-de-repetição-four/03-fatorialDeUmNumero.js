// Exercício 3: Fatorial de um Número
// Escreva uma função chamada factorial que recebe um número n e retorna o fatorial de n (n!) usando um loop for.
   // n! = n·(n -1 ) · ( n- 2 )

// 1.--------     

// n   = 8  
// i   = 1         
// sum = 1
//sum = 1 * i(1) = 1                

// 2.--------

// n   = 8  
// i   = 2        
// sum = 1
// sum = 1 * i(2) = 2                 

//3.----------
// n   = 8  
// i   = 3        
// sum = 2
// sum = 2 * i(3) = 6

//4.----------
// n   = 8  
// i   = 4        
// sum = 6
// sum = 6 * i(4) = 24

//5.----------
// n   = 8  
// i   = 5        
// sum = 24
// sum = 24 * i(5) = 120

//6.----------
// n   = 8  
// i   = 6        
// sum = 120
// sum = 120 * i(6) = 720

//7.----------
// n   = 8  
// i   = 7       
// sum = 720
// sum = 720 * i(7) = 5040

//8.----------
// n   = 8  
// i   = 8      
// sum = 5040
// sum = 5040 * i(8) = 40320


function factorial(n) {
 let sum = 1

  for(let i = 1;  i <= n; i++) {
  sum = sum * i
  
  //console.log(i)
  //console.log(sum)
  console.log(n)
  }  

return sum;                                                   

}

console.log(factorial(8))
                                                  



    
