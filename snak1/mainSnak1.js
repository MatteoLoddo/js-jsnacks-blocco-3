const userNumberContainer = []

let  result  =  0

const maxResult = 50

let userNumber
let userNumberDifference 
let valid = 0
// CREO IL CICLO CHE MI CHIEDE DI INSERIRE IL NUMERO FINCHE NON RAGGIUNGO LA SOMMA DI 50
while (result < maxResult){
    // reset valid
    valid = 0
    // chiedo il numero
    userNumber = parseInt(prompt("inserire un numero"))
    // se il numero e maggiore del massimo risultato che posso ottenere oppure  il numero inserito e maggiore  del numero che mi serve per arrivare al 50 mi richiede il numero
    if( userNumber > maxResult || userNumber > userNumberDifference || userNumber < 0){
        valid  = 1
        
// invece se il numero rientra tra lo 0 e il 50 allora lo inserisco nell array e lo aggiungo al calcolo
    }else if( userNumber <= maxResult && valid == 0){
        userNumberContainer.push(userNumber)
        userNumberDifference = maxResult - result - userNumber
        result += userNumber
        ;
    }
    
    console.log(userNumberContainer + "array container numeri")
    
    console.log(userNumberDifference +"differenza");
    
    
    console.log(result +"risultato");
    // L UNICO MODO PER CHIUDERE IL CICLO E RAGGIUNGERE PERFETTAMENTE IL 50  
}



