

const Pessoa={
    nome: "",
    idade: 0,

    getNome:function(){
        return this.nome
    },

    setNome:function(nome){
        this.nome=nome
    },

    getIdade:function(){
        return this.idade
    },

    setIdade:function(idade){
        this.idade= idade
    }
}




const res = document.querySelector(".res")
const botao = document.getElementById("btn_add")


const addpessoas=(el)=>{
    res.innerHTML= ""
    pessoas.map((pessoa)=>{
        const div= document.createElement("div")
        div.setAttribute("class", "pessoa")
        div.innerHTML=`nome: ${Pessoa.nome}, idade: ${Pessoa.idade}`
        res.appendChild(div)
    })
}

botao.addEventListener("click", (evt)=>{
    nom = document.getElementById("f_nome").value
    idad = document.getElementById("f_idade").value
    
    pessoa.setNome(nom)
    pessoa.setIdade(idad)
    

    addpessoas()
    

})


console.log(Pessoa.nome)




