const caixa = document.querySelector(".caixa1")

const cursos = ["HTML", "CSS", "javascript", "python"]

cursos.map((el, chave)=>{

const novoelemento = document.createElement("div")
novoelemento.setAttribute("id", "d"+ chave)
novoelemento.setAttribute("class", "cursos")
novoelemento.innerHTML = el
caixa.appendChild(novoelemento)

const btn_lixeira = document.createElement("img")
btn_lixeira.setAttribute("src", "./lixeira.png")
btn_lixeira.setAttribute("class", "btn_lixeira")
novoelemento.appendChild(btn_lixeira)

btn_lixeira.addEventListener("click", (evt)=>{
    caixa.removeChild(evt.target.parentNode)
})




})