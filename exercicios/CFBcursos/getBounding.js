const q1= document.getElementById("q1")
const q2= document.getElementById("q2")

const posx= document.getElementById("posx")
const posy= document.getElementById("posy")

const largura= document.getElementById("largura")
const altura= document.getElementById("altura")


q1.accessKey= "b"
q2.accessKey= "n"

const info=(el)=>{
    let DOMRect_q= el.getBoundingClientRect()

    posx.innerHTML= `posx: ${DOMRect_q.x}`
    posy.innerHTML= `posy: ${DOMRect_q.y.toFixed(2)}`
    largura.innerHTML= `largura: ${DOMRect_q.width}`
    altura.innerHTML= `altura: ${DOMRect_q.height}` 
}

q1.addEventListener("click", (evt)=>{
   info(q1)
})

q2.addEventListener("click", (evt)=>{
    info(q2)
})
