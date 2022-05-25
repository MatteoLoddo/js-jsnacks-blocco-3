// chiedere all uutente un numero
debugger
const userNumber = parseInt(prompt("Inserisci un Numero"))


let array = []
const NumeriPerRichiesta = 10

while (array.length< NumeriPerRichiesta * userNumber){
    let array2 = Math.floor(Math.random()*10)

    array.push(array2)
    
    console.log(array2);
}

console.log(array.length)



