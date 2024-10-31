let num = [3,4,5,2, 10, 7]
num.sort()
var soma = 0
for(let c in num) {

    if (num[c] % 2 == 0) {
        console.log(`o número ${num[c]} é par`)
    } else {
         console.log(`o numero ${num[c]} é impar`)
    }
    soma = soma + num[c]
}

console.log(`a soma dos números é ${soma}`)
    