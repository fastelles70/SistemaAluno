let numeroDeAlunos = 10;
let contador = 0;

let nomeDeAluno=["Marcel", "Francys","Rita", "Afrânio"]

for(let nome of nomeDeAluno){
    console.log(`Esta pessoa se chama ${nome}`)
}

// for (let contador = 0; contador < numeroDeAlunos; contador++){
//     //console.log(contador)  

//     if(contador == 0){
//         console.log("O Número " + contador + " é Zero!!")
//     }else if(contador % 2 == 0){
//         console.log("O Número " + contador + " é Par!!")
//     }else{
//         console.log(`O Número ${contador} é Impar!!!`)
//     }
// }

while (contador < numeroDeAlunos) {

    if(contador == 0){
             console.log("O Número " + contador + " é Zero!!")
             }else if(contador % 2 == 0){
                 console.log("O Número " + contador + " é Par!!")
             }else{
                 console.log(`O Número ${contador} é Impar!!!`)
             }

             contador ++;    
}