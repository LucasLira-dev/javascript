/*parametros rest*/

function soma(...valores){
    let tamanho = valores.length
    let res = 0
    for(let i of valores){
        res+= i
    }
    return res
}

console.log(soma(10,5, 2, 15,8))