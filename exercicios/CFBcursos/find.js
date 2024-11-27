const p_array = document.getElementById('array')
const txtpesquisar = document.getElementById('txt_pesquisar')
const btnpesquisar = document.getElementById('btnPesquisar')
const resultado = document.getElementById('resultado') 

const elementos_array= ["html","css", "javascript"]

p_array.innerHTML= elementos_array

btnpesquisar.addEventListener("click", (evt)=>{
    resultado.innerHTML= `Valor não encontrado`
    elementos_array.find((e,i)=>{
        if(e.toUpperCase()==txtpesquisar.value.toUpperCase()){
            resultado.innerHTML= `valor pesquisado encontrado: ${e} na posição ${i+1}`
            return e
        } 
    })
    
})