
//desestruturação de arrays
/*let a,b,c,d

[a,b,c,d]=[10,20,30,40]


let numeros=[8,3,33,1]

let[a,b,c,d]= numeros

*/





/*desestrutiração de objetos
let a,b,c,d

({a,b,c,d}= {a:"azul", b:"vermelho",c:"laranja", d:"branco"})

console.log(a)
console.log(b)
console.log(c)
console.log(d) */


// invertendo os valores das variaveis com desistruturação
let a= 10;
let b= 22;

[a,b]=[b,a]

console.log(a)
console.log(b)


//usando desistruturação em funções
let numeros=()=>{
    return [21,9,33,5]
}

let [n1,n2,n3,n4]= numeros()

console.log(n1)
console.log(n2)
console.log(n3)
console.log(n4)