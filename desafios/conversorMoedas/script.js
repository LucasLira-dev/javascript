const btn_converter= document.getElementById("converter")
const btn_limpar= document.getElementById("limpar")

const dolar= document.getElementById("dolar")
const euro= document.getElementById("euro")
const libra= document.getElementById("libra")

const res= document.getElementById("res")




btn_converter.addEventListener("click", (evt)=>{
    let moeda= (document.getElementById("moeda").value)
    moeda.value= ""
    res.value= ""
    if(moeda.value==0){
        alert("digite um número válido, por favor")
    } else{
        if(dolar.checked){
           let ValConvertido= (moeda * 6.12).toFixed(2)
           res.value= `${moeda} R$ convertido em Dólar é \u0024${ValConvertido}`
           console.log(moeda)
        } else if(euro.checked){
            let ValConvertido= (moeda * 6.33).toFixed(2)
             res.value= `${moeda} R$ convertido em Dólar é \u20AC ${ValConvertido}`
        } else if(libra.checked){
            let ValConvertido= (moeda * 7.64).toFixed(2)
             res.value= `${moeda} R$ convertido em Dólar é \u00A3 ${ValConvertido}`
        }
    }
})

btn_limpar.addEventListener("click", (evt)=>{
    let moeda= (document.getElementById("moeda"))
    moeda.value = ""
    res.value= ""
})
