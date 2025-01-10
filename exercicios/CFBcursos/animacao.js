const carro= document.getElementById("carro")
const btn_esquerda= document.getElementById("btn_esquerda")
const btn_direita= document.getElementById("btn_direita")
const btn_cima= document.getElementById("btn_cima")
const btn_descer= document.getElementById("btn_descer")
const btn_parar= document.getElementById("btn_parar")


const init=()=>{
    carro.style.position= "relative"
    carro.style.left= "0"
    carro.style.bottom= "0"
}

let anima=null

const move=(xdir, ydir)=>{
    carro.style.left= parseInt(carro.style.left) + (10*xdir) +"px"
    carro.style.bottom= parseInt(carro.style.bottom) + (10*ydir) +"px"
}


btn_parar.addEventListener("click", (evt)=>{
    clearInterval(anima)
})

btn_esquerda.addEventListener("click", (evt)=>{
   clearInterval(anima)
   anima= setInterval(move, 20, -1, 0)
})

btn_direita.addEventListener("click", (evt)=>{
    clearInterval(anima)
    anima= setInterval(move,20,1, 0)
})

btn_descer.addEventListener("click", (evt)=>{
    clearInterval(anima)
    anima= setInterval(move, 20, 0, -1)
})

btn_cima.addEventListener("click", (evt)=>{
    clearInterval(anima)
    anima= setInterval(move,20,0, 1)
})

window.onload= init