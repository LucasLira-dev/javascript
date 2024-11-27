const p_array = document.getElementById('array')
const btnVerificar = document.getElementById('btnVerificar')
const resultado = document.getElementById('resultado') 

const elementos_array= [8,18,15,9,55,2, 10]

p_array.innerHTML= elementos_array

btnVerificar.addEventListener("click", (evt)=>{
   const ret = elementos_array.some((e,i)=>{
        if(e<18){
            resultado.innerHTML= "array não conforme na posição " + i
        }
        return e>= 18
    })

    if(ret){
        resultado.innerHTML= "ok"
    }
})
