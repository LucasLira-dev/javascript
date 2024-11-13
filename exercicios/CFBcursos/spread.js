let n1 = [10,3,8,11]
let n2 = [2,8,3,5,8,9]
let n3 = n1


const jogador1 = {nome: "lucas", energia: 100, vidas:3, magia: 150 
}
const jogador2 = {nome: "alexandre", energia: 100, vidas:5, velocidade: 80}
const jogador3 = {...jogador1,...jogador2}
/*
console.log(jogador3) */


/*console.log("n1 " + n1)
console.log("n2 " + n2) 
console.log("n3 " + n3)  */
 

const soma =(v1,v2,v3)=>{
    return v1+v2+v3
}

let valores = [1,5,4]

console.log(soma(...valores))

