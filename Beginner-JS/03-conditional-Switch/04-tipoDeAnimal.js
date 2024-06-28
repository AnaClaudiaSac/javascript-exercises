// Exercício 4: Tipo de Animal

// Escreva uma função chamada animalType que recebe o nome de um animal ("cachorro", "gato", "pássaro", "peixe") e imprime o tipo correspondente ("Mamífero" para cachorro e gato, "Ave" para pássaro, "Peixe" para peixe).

function animalType(animal) {
  let result = null;

  switch (animal) {
    case "Cachorro":
    case "Gato":
      result = "Mamiferos";
      break;
    case "Passaro":
      result = "Aves";
      break;
    case "Peixe":
      result = "Peixes";
      break;
    case "Sapo":
      result = "Anfíbios";
      break;
    case "Lagarto":
      result = "Répteis";
      break;
    default:
      result = "Tipo de animal não encontrada";
      break;
  }

  return result;

}


console.log(animalType("Cachorro"));
console.log(animalType("Gato"));
console.log(animalType("Passaro"));
console.log(animalType("Peixe"));
console.log(animalType("Sapo"));
console.log(animalType("Lagarto"));
console.log(animalType("Pokemon"));


// Output:
// Mamiferos
// Mamiferos
// Aves
// Peixes
// Anfíbios
// Répteis
// Tipo de animal não encontrada