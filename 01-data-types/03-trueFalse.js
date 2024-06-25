// Exercício 3: Comparação de Tipos de Dados

// Crie uma função chamada compareTypes que recebe dois valores e retorna true se ambos forem do mesmo tipo e false caso contrário.

function compareTypes(value1, value2) { 
 return typeof value1 === typeof value2

}

console.log(compareTypes(42, 'hello'))
console.log(compareTypes(42, 23))
console.log(compareTypes('hello', 'world'))
console.log(compareTypes(true, false))
console.log(compareTypes({}, [])) //()




//Output:

// false                                                
// true
// true
// true
// true

//Por que um array é um objeto em JavaScript?
// S é uma linguagem baseada em protótipos, portanto existem apenas tipos e objetos primitivos. Concede flexibilidade, mas ao mesmo tempo torna as coisas mais confusas.

// 👉Tudo é um objeto!
// A implementação de todos os valores não primitivos em JavaScript é baseada em objetos.
// Simplificando, JavaScript possui um único objeto prototípico do qual todos os outros objetos obtêm suas propriedades iniciais. Podemos obtê-lo acessando __proto__.

// O tipo array não é uma exceção aqui. A classe global Array é um objeto global e um literal de array é apenas uma instância da classe global Array.
// Por sua vez, um protótipo direto do tipo array contém todos os seus métodos especiais, como fill, find, etc.