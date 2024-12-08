class Carros{
    constructor(nome, portas){
        this.nome= nome
        this.portas= portas
        this.ligado= true
        this.vel= 0
        this.cor= undefined
    }

    ligar= function(){
        this.ligado= true
    }

    desligar= function(){
        this.ligado= false
    }

    setCor= function(cor){
        this.cor= cor
    }
}

class Militar extends Carros{
    constructor(nome, portas, blindagem, municao){
        super(nome, portas)
        this.blindagem= blindagem
        this.municao= municao
        this.setCor= "verde"

    }

    atirar= function(){
        if(this.municao>0){
            this.municao--
        }
    }
}

class Utilitario extends Carros{
    constructor(nome, portas, lugares){
        super(nome, portas)
        this.lugares= lugares
    }
}


const c1= new Carros("normal", 4)
const c2= new Militar("carrao", 3, 60, 0)
console.log(c2.nome)

c1.ligar()



console.log(`ligado: ${(c1.ligado?"sim":"não")}`)