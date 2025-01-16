const f_nome= document.getElementById("f_nome")
const f_nota= document.getElementById("f_nota")
const f_msg= document.getElementById("f_msg")


document.querySelector("#btn_validar").addEventListener("click", (evt)=>{
    let estadoValidacao= f_nota.validity

    if(estadoValidacao.valueMissing){
        f_nota.setCustomValidity("este campo é obrigatorio")
    } else if(estadoValidacao.rangeOverflow){
        f_nota.setCustomValidity("nota maior do que o limite")
    }  else if(estadoValidacao.rangeUnderflow){
        f_nota.setCustomValidity("não é possivel tirar uma nota menor que 0 seu burro")
    }



    f_nota.reportValidity()
    evt.preventDefault()
})