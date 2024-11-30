

let res = document.getElementById("res")
const soma = document.getElementById("soma")
const mult = document.getElementById("mult")
const divi = document.getElementById("divisao")
const sub = document.getElementById("subtracao")

const op =[
    ()=>{
        const val = [document.getElementById("num1").value, document.getElementById("num2").value]
        res.innerHTML= Number(val[0]) + Number(val[1])
    },

    ()=>{
        const val = [document.getElementById("num1").value, document.getElementById("num2").value]
        res.innerHTML= Number(val[0]) *  Number(val[1])
    },

    ()=>{
        const val = [document.getElementById("num1").value, document.getElementById("num2").value]
        res.innerHTML= Number(val[0]) / Number(val[1])
    },

    ()=>{
        const val = [document.getElementById("num1").value, document.getElementById("num2").value]
        res.innerHTML= Number(val[0]) - Number(val[1])
    }


]

soma.addEventListener("click", (op[0]))
mult.addEventListener("click", (op[1]))
divi.addEventListener("click", (op[2]))
sub.addEventListener("click", (op[3]))




