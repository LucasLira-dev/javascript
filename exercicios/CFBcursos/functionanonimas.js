/*let f= function (...valores){
    let res = 0
    for(i of valores){
        res+= i
    }

    return res
}


console.log(f(10,5)) */

const funcoesconstrutor =new Function("v1","v2", "return v1 + v2")

console.log(funcoesconstrutor(10,5))