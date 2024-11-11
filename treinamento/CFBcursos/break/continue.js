let n = 0
let max = 100
/*
while (n<max){
    console.log(n)
    if(n > 10){
        break
    }
    n++
    
} */

var pares = 0

for(let i=n; i < max; i++){
    console.log(i)
    if( i %2==1){
      continue 
    }
    pares++
}

console.log(`numeros pares ${pares}`)