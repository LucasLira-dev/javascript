const militar = document.getElementById("f_tipoMilitar")
const normal = document.getElementById("f_tipoNormal")
const blindagem = document.getElementById("f_blindagem")
const municao = document.getElementById("f_municao")
const portas= document.getElementById("f_portas")
const nome = document.getElementById("f_nome")
const carros = document.querySelector(".carros")
const botao = document.getElementById("btn_addCarro")


let a_carros=[]

const removerCarro=(quem)=>{
   a_carros= a_carros.filter((el)=>{
        return el.nome!=quem
    })
}

militar.addEventListener("click", (evt)=>{
    nome.value= ""
    portas.value= ""
    blindagem.value= 0
    municao.value= 0
    blindagem.removeAttribute("disabled")
    municao.removeAttribute("disabled")
})

normal.addEventListener("click", (evt)=>{
    nome.value= ""
    portas.value= ""
    blindagem.value= 0
    municao.value= 0
    blindagem.setAttribute("disabled", "disabled" )
    municao.setAttribute("disabled", "disabled")
})


const gerenciarCarros=()=>{
    carros.innerHTML=""
    a_carros.forEach((c)=>{
        const div = document.createElement("div")
        const btn = document.createElement("button")
        btn.addEventListener("click", (evt)=>{
            const quemRemover= evt.target.parentNode.dataset.nome
            removerCarro(quemRemover)
            gerenciarCarros()
        })
        div.setAttribute("class", "carro")
        div.setAttribute("data-nome", c.nome)
        div.innerHTML=` ${c.nome} <br>`
        div.innerHTML+= `${c.portas} <br>`
        div.innerHTML+= `${c.blindagem} <br>`
        div.innerHTML+=  `${c.municao} <br>`
        btn.innerHTML+= 'remover'
        carros.appendChild(div)
        div.appendChild(btn)
    })
    
}

botao.addEventListener("click", (evt)=>{
   if(normal.checked){
        const c= new Carros(nome.value, portas.value)
        a_carros.push(c)
   }else{
        const c= new Militar(nome.value, portas.value, blindagem.value, municao.value)
        a_carros.push(c)
   }
   gerenciarCarros()
})


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


const c1= new Carros('lucas', 4)
const c2= new Militar("carrao", 3, 60, 0)
c1.setNome('lucas')
console.log(c1.nome)










