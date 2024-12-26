/*class Jogador{
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
    gols: ${j1.gols}`) */

    
class Clube{
    constructor(nome, titulos, tamanho){
        this.nome= nome
        this.titulos= titulos
        this.tamanho= tamanho
    }

    info(){
        console.log(` 
        nome: ${this.nome}
        titulos: ${this.titulos}
        grandeza: ${this.tamanho}
    }`)
    }
}

class Clube2 extends Clube{
    constructor(nome, titulos, tamanho, torcida){
        super(nome, titulos, tamanho)
        this.torcida=torcida
    }

    info(){
        console.log(`
       nome: ${this.nome}
       titulos: ${this.titulos}
       grandeza: ${this.tamanho}
       quantidade de torcedores: ${this.torcida}
    `)
    }
}

const newClub= new Clube("santos", 34, "gigante")

newClub.info()

const c2= new Clube2("fortaleza", 20, "grande", 10000)
c2.info()