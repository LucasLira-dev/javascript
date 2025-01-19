
const btn= document.getElementById("btn")


btn.addEventListener("click", (evt)=>{
    const nome= document.getElementById("f_nome").value
    localStorage.setItem("nome", nome)
    console.log(nome)
    let res= localStorage.getItem("nome")
    
    
    evt.preventDefault()
})




