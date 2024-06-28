// 2 - Comparando Valores:

// Crie uma função que receba dois valores como argumentos e compare-os usando os operadores de comparação (==, ===, != e !==). A função deve retornar:

// True se os valores forem iguais

// False se os valores forem diferentes

// Teste a função com diferentes combinações de tipos de dados, como:

function ComparingValues(value1, value2) {
 
  console.log("-----------");
  console.log("value1: ", value1, "value2:", value2)
  console.log("==", value1 == value2);
  console.log("===", value1 === value2);
  console.log("!=", value1 != value2);
  console.log("!==", value1 !== value2);
  console.log("------------");
}

ComparingValues(20, 20);
ComparingValues("20", 20);
ComparingValues(10, 20);
ComparingValues("Ana", "Anna");
ComparingValues({ nome: "Ana" }, { nome: "Anna" });
ComparingValues([2, 4, 6], [8, 10, 12]);
ComparingValues([1, 2, 3], [1, 2, 3]);
ComparingValues(true, false);
ComparingValues(true, true);
ComparingValues({}, []);
ComparingValues({}, {});

// Output:
