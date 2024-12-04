/*class pessoa {
    constructor(pnome, pidade){
        this.nome= pnome
        this.idade= pidade
    }

    info(){
        console.log(`nome: ${this.nome} idade: ${this.idade}`)
    }
}

let p1 = new pessoa("lucas", 20)
let p2 = new pessoa("isaura", 47)
let p3 = new pessoa("alexandre", 28)
let p4 = new pessoa("joaquim", 62)
let p5 = new pessoa("luzia", 84)

p2.info()
console.log(p2.nome)
console.log(p3.nome)
console.log(p4.nome)
console.log(p5.nome)*/



class Carros{
    constructor(pnome, ptipo){
        this.nome= pnome
        if(ptipo==1){
            this.tipo= "esportivo"
            this.velmax= 200
        }
        else if(ptipo==2){
            this.tipo= "popular"
            this.velmax= 350
        }
        else if(ptipo==3){
            this.tipo= "elite"
            this.velmax= 400
        }
        else{
            this.tipo= "velho"
            this.velmax= 100
         }
    } 

    

    setnome(nome){
        this.nome= nome
    }

    info(){
        console.log(this.nome)
        console.log(this.tipo)
        console.log(this.velmax)
        
    }
}

let c1= new Carros('chique', 1)
let c2 = new Carros('bonitao', 2)
let c3= new Carros('fodastico', 3)
let c4= new Carros('pobre', 4)
c1.setnome('super rapido')

c1.info()


