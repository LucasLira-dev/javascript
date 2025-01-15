let numeros=[10,20,30,40,50,60,70,80,90]

let [a,b,c, ...d]= numeros //neste caso a variavel "d" recebe um array com todos os numeros restantes 

console.log(a)
console.log(b)
console.log(c)
console.log(d)

let obj={
    nome: "lucas",
    canal: "cfbcursos"
}

let {nome, canal}= obj //neste caso as variaveis NOME e CANAL estão recebendo os valores das propriedades do objeto. as variaveis DEVEM OBRIGATORIAMENTE ter o MESMO NOME das PROPRIEDADES

console.log(nome)
console.log(canal)

const cores=()=>{
    return["azul", "vermelho", "amarelo", "branco"]
}

let [c1,c2,,c3]= cores()// isto exibirá "branco" no lugar de "amarelo" ja que foi deixado um espaço em branco em seu lugar

console.log(c1)
console.log(c2)
console.log(c3)

