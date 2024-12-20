const mat= document.getElementById("mat")
const num1= document.getElementById("num1")
const res= document.getElementById("res")
const btn= document.getElementById("btn")

const num= Math.random()*10
mat.innerHTML= Math.floor(num)


btn.addEventListener("click", ()=>{
    res.innerHTML= Math.sqrt(num1.value)
})

