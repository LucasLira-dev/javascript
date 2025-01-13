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
    carro.style.width= "100px"
    carro.style.height= "40px"
    tamMax= window.innerWidth-parseInt(carro.style.width)
    alturaMax= window.innerHeight-parseInt(carro.style.height)
}

let anima=null
let tamMax= null
let alturaMax= null
let tamCarro= null
let dir= 0

const move=(xdir, ydir)=>{
    if(xdir > 0){
        if(parseInt(carro.style.left) <=tamMax){
             carro.style.left= parseInt(carro.style.left) + (10*xdir) +"px"
             anima= setTimeout(move,20,xdir)
        } 
        
        else{
            clearTimeout(anima)
            move(-1)
        }
    }else if(xdir<0){
        if(parseInt(carro.style.left) >=0){
              carro.style.left= parseInt(carro.style.left) + (10*xdir) +"px"
              anima= setTimeout(move,20,xdir)
        } 
        else{
            clearTimeout(anima)
            move(1)
        }
    }


   
    //carro.style.bottom= parseInt(carro.style.bottom) + (10*ydir) +"px"
    //anima= setTimeout(move, 20, xdir, ydir)
} 

btn_parar.addEventListener("click", (evt)=>{
    clearTimeout(anima)
})

btn_esquerda.addEventListener("click", (evt)=>{
   clearTimeout(anima)
   move(-1, 0)
})

btn_direita.addEventListener("click", (evt)=>{
    clearTimeout(anima)
    move(1, 0)
})

btn_descer.addEventListener("click", (evt)=>{
    clearTimeout(anima)
    move(0,-1)
})

btn_cima.addEventListener("click", (evt)=>{
   clearTimeout(anima)
   move(0, 1)
})

window.onload= init

window.addEventListener("resize", ()=>{
    tamMax= window.innerWidth-parseInt(carro.style.width)
    alturaMax= window.innerHeight-parseInt(carro.style.height)
})

window.addEventListener("keydown", (evt)=>{
    if(evt.code==="ArrowUp"){
        carro.style.width= parseInt(carro.style.width)+10+"px"  
        carro.style.height= parseInt(carro.style.height)+10+"px"  
     }

     if(evt.code==="ArrowDown"){
        carro.style.width= parseInt(carro.style.width)-10+"px"  
        carro.style.height= parseInt(carro.style.height)-10+"px"  
     }

     tamCarro= parseInt(carro.style.width)
     tamMax=window.innerWidth-tamCarro

})