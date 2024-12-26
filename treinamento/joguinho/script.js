const num= document.getElementById("num")
const res= document.getElementById("res")
const btn= document.getElementById("btn")


btn.addEventListener("click", ()=>{
   const numSorteado= Math.random()*10
   res.innerHTML= ""

   if(num.value=="" || num.value>10){
      alert("digite um número válido")
   }

   else if(num.value== Math.floor(numSorteado)){
     res.innerHTML= `AEEEEEEEEEEEE tu acertou, parabénsSS <br> o número sorteado foi ${Math.floor(numSorteado)}`
     res.classList.remove("erro")
     res.classList.add("acerto")
   } else{
     res.innerHTML= `Voce errou :( <br> o número sorteado foi ${Math.floor(numSorteado)}`
     res.classList.remove("acerto")
     res.classList.add("erro")
   }
    

})
