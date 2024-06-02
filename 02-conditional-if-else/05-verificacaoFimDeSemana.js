// Exercício 5: Verificação de Fim de Semana

// Escreva uma função chamada isWeekend que recebe um dia da semana (em texto, como "segunda-feira", "terça-feira", etc.) e imprime "Fim de semana" se o dia for sábado ou domingo, e "Dia de semana" caso contrário.

function isWeekend(day) { 
  if (day === "sabado" || day ==="domingo"){
    console.log("Fim de semana")
  } else{
    console.log("Dia de semana")
  }
 }

 isWeekend("terça")
 isWeekend("sabado")
 isWeekend("domingo")
 isWeekend("sexta")

 // Output:
 
//  Dia de semana
//  Fim de semana
//  Fim de semana
//  Dia de semana