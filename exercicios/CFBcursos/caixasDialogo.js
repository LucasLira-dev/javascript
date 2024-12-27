const btn_alert= document.getElementById("btn_alert")
const btn_confirm= document.getElementById("btn_confirm")
const btn_prompt= document.getElementById("btn_prompt")


btn_alert.addEventListener("click", ()=>{
    alert("olá mundo")
})

btn_confirm.addEventListener("click", ()=>{
    const resp=confirm("voce ta bem?")
    if(resp== true){
        console.log("o botao OK foi clicado")
    } else{
        console.log("o botao CANCELAR foi clicado")
    }
})

btn_prompt.addEventListener("click", ()=>{
    const nome= prompt("digite seu nome")
    console.log(nome)
})