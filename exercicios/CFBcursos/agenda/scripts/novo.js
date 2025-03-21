const btn_gravar= document.getElementById("btn_gravar");
const btn_cancelar= document.getElementById("btn_cancelar");

const f_nome= document.getElementById("f_nome");
const f_celular= document.getElementById("f_celular");
const f_email= document.getElementById("f_email");
const f_dtnasc= document.getElementById("f_dtnasc");


btn_gravar.addEventListener("click", (evt)=>{
    const valores={
        "f_nome": f_nome.value,
        "f_celular": f_celular.value,
        "f_email": f_email.value,
        "f_dtnasc": f_dtnasc.value
    }

    const cabecalho={
        method: "POST", // método de envio
        body: JSON.stringify(valores), // dados que estão sendo enviados
        
    }

    const endpoint= "http://127.0.0.1:1880/addcontatos";
    fetch(endpoint, cabecalho)
    .then(res=>{
        if(res.status==200){
            f_nome.value="";
            f_celular.value="";
            f_email.value="";
            f_dtnasc.value="";
            f_nome.focus();
        } else {
            console.log("Erro ao gravar dados!");
        }
    })
})

btn_cancelar.addEventListener("click", (evt)=>{
  reset();
})

const reset=()=>{
    f_nome.value="";
    f_celular.value="";
    f_email.value="";
    f_dtnasc.value="";
    f_nome.focus();
};


