const soma= (v1,v2)=> {return v1+v2}
console.log(soma(10,5))

const nome=n=>{return n}
console.log(nome("lucas"))

const add=n=> n+10
console.log(add(10)) 


let valor=(...valores)=>{
    let res = 0
    for(i of valores){
        res+= i
    }

    return res
}

console.log(soma(10,6))