


// modelo com CLASS//

/*class pessoa {
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
} */


    //modelo com FUNÇAO//

    function Pessoa(pnome,pidade) {
            this.nome= pnome,
            this.idade= pidade,
        
    
        this.getNome= function(){
            return this.nome
        },
    
        this.getIdade= function(){
            return this.idade
        },
    
        this.setNome= function(nome){
            this.nome= nome
        },
    
        this.setIdade= function(idade){
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
    
    const p= new Pessoa(nome.value, idade.value)

    pessoas.push(p)

    nome.value= ""
    idade.value= ""
    nome.focus()

    addPessoas()
})

