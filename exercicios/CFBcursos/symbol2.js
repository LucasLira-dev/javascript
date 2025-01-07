class Jogador{
    constructor(nome){
        this.nome= nome
        this.id= Symbol()
    }
}

let jogadores= [new Jogador("j1"), new Jogador("j2"), new Jogador("j3"), new Jogador("j4"), new Jogador("j1")]

let s1= jogadores[0].id

/*jogadores=jogadores.filter((j)=>{
    return j.id!==s1
}) */ //retira o jogador com o id SYMBOL s1

jogadores=jogadores.filter((j)=>{
    return j.nome!=="j1"

})
 // retira o jogador com o nome "j1"

let s= []

let s_jogadores= jogadores.filter((j)=>{
    return j.nome != "j1"
})

s= s_jogadores.map((j)=>{
    return j.id
})

console.log(jogadores)//retorna os jogadores com nome diferente de "j1"
console.log(s) //retorna os ids dos jogadores com nome diferente de "j1"



const msg= Symbol("olá")//cria um symbol com a descrição "olá"

console.log(msg.description)//retorna a descrição do symbol