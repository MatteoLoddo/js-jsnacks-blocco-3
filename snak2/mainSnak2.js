// chiedere all uutente un numero

const userNumber = parseInt(prompt("Inserisci un Numero"))


let array = []
const NumeriPerRichiesta = 10

while (array.length< userNumber){
    const nuovoArray = []
    array.push(nuovoArray)

    while(nuovoArray.length < 10){
    let numeriDaInserire = Math.floor(Math.random()*100)
    
    if (!nuovoArray.includes(numeriDaInserire)){
        nuovoArray.push(numeriDaInserire)
    }
    console.log(numeriDaInserire);
    }
//     array.push(array2)
    
    
// }

console.log(array.length)

}

