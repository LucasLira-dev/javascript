const url= document.getElementById("url")
const btn_url= document.getElementById("btn_url")

btn_url.addEventListener("click", ()=>{
    window.location= url.value
   // window.history.forward() irá para a proxima pagina no historico
})