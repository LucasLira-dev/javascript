



class pessoa {
    constructor(pnome, pidade){
        this.nome= pnome
        this.idade= pidade
    }

    getNome(){
        return this.nome
    }

    getIdade(){
        return this.idade
    }

    setNome(nome){
        this.nome= nome
    }

    setIdade(idade){
        this.nome= idade
    }
}

let pessoas= []

const res = document.querySelector(".res")
const botao = document.getElementById("btn_add")

const addPessoas=()=>{
    res.innerHTML= ""
    pessoas.map((p)=>{
        const div= document.createElement("div")
        div.setAttribute("class", "pessoa")
        div.innerHTML= `nome ${p.getNome()}, idade ${p.getIdade()}`
        res.appendChild(div)
    })
}

botao.addEventListener("click", (evt)=>{
    const nome = document.getElementById("f_nome")
    const idade = document.getElementById("f_idade")
    
    const p= new pessoa(nome.value, idade.value)

    pessoas.push(p)

    nome.value= ""
    idade.value= ""
    nome.focus()

    addPessoas()
})

