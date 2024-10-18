/* condições WHILE e DO WHILE: 
WHILE: é usado no inicio do bloco
DO WHILE: é usado no fim do bloco */

var c = 1
console.log('numeros pares')
while (c <= 20) {
    if (c % 2 == 0) {
    console.log(c)
    
    }
    c++  
} 

var n = 1
console.log('numeros impares')
while (n <= 20) {
    if(n % 2 == 1) {
        console.log(n)
    }
    n++
}
console.log('CONTAGEM REGRESSIVA')
var regressiva = 10
 do{
    console.log(regressiva)
    regressiva--
} while(regressiva >= 0)