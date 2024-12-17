
/*
 PROMISSE SEM FUNÇAO

const numero= document.getElementById("numero")
const btn_promessa= document.getElementById("btn_promessa") 

const promise= new Promise((resolve, reject)=>{
    let resultado= true
    let tempo= 3000

    setTimeout(()=>{
        if(resultado){
            resolve("deu tudo certo")
        } else{
             reject("deu tudo errado")
        }
    }, tempo)
})

promise.then((retorno)=>{
    numero.innerHTML= retorno
    numero.classList.remove("erro")
    numero.classList.add("ok")
})

promise.catch((retorno)=>{
    numero.innerHTML= retorno
    numero.classList.remove("ok")
    numero.classList.add("erro")
})

numero.innerHTML= "processando..."

*/


// USANDO PROMISE NO MOMENTO EM QUE CLICAR NUM BOTAO

const numero= document.getElementById("numero")
const btn_promessa= document.getElementById("btn_promessa")

btn_promessa.addEventListener("click", (evt)=>{
    numero.innerHTML= "processando..."
    promessa()
    .then((retorno)=>{
        numero.innerHTML= retorno
        numero.classList.remove("erro")
        numero.classList.add("ok")
    })
    
    .catch((retorno)=>{
        numero.innerHTML= retorno
        numero.classList.remove("ok")
        numero.classList.add("erro")
    })
    
})


const promessa= ()=>{
    let p= new Promise((resolve, reject)=>{
        let resultado= true
        let tempo= 3000
    
        setTimeout(()=>{
            if(resultado){
                resolve("deu tudo certo")
            } else{
                 reject("deu tudo errado")
            }
        }, tempo)
    })
    return p
}




numero.innerHTML= "esperando..."

