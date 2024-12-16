class Jogador{
    constructor(nome, gols, assistencias, partidas){
        this.nome= nome
        this.gols= gols
        this.assistencias= assistencias
        this.partidas= partidas
    }
}

const j1= new Jogador('lucas', 22, 13, 27)
console.log(`
    nome do jogador:  ${j1.nome}
    quantidade de partidas: ${j1.partidas} 
    assistencias: ${j1.assistencias}
    gols: ${j1.gols}`)