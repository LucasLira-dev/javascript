
const teclasNum= [...document.querySelectorAll(".num")]
const teclasOp= [...document.querySelectorAll(".op")]

const teclaRes= document.querySelector(".res")

const display= document.getElementById("display")

const tcpy = document.getElementById("tcpy")

const tlimpar= document.getElementById("tlimpar")

const tigual = document.getElementById("tigual")

const calc_aba= document.getElementById("calc_aba")

const calc= document.getElementById("calc")

const img= document.getElementById("img_calc_aba")




let sinal= false
let decimal= false


teclasNum.forEach((el)=>{
    el.addEventListener("click", (evt)=>{
        sinal= false
        if(evt.target.innerText==="."){
            if(!decimal){
                decimal= true
                if(display.innerText== "0"){
                    display.innerHTML= "0."
                }else{
                    display.innerText+=evt.target.innerText
                }
            }
         } else{
                if(display.innerText=="0"){
                    display.innerHTML= ""
                }
                display.innerHTML+=evt.target.innerHTML       
            }    
    })
})

teclasOp.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        if(!sinal){
            sinal= true
            if(display.innerHTML=="0"){
                display.innerHTML=""
            }
            if(evt.target.innerText=="x"){
                display.innerHTML+="*"
           } else{
           display.innerHTML+=evt.target.innerHTML
           }
        } 
    })
}) 

tlimpar.addEventListener("click", (evt)=>{
    sinal= false
    decimal= false
    display.innerHTML= "0"
})

tigual.addEventListener("click", (evt)=>{
    sinal= false
    decimal= false
    const res= eval(display.innerText)
    display.innerHTML= res
}) 


tcpy.addEventListener("click", (evt)=>{
    navigator.clipboard.writeText(display.innerHTML)
    alert("copiado para a área de transferencias")
})


calc_aba.addEventListener("click", (evt)=>{
    calc.classList.toggle("calc_exibir")
    if(calc.classList.contains("calc_exibir")){
        img.setAttribute("src", "setaEsquerda.svg")
    } else{
        img.setAttribute("src", "setaDireita.svg") 
    }
})  

    
