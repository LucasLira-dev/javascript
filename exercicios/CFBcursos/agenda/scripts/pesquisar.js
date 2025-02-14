const btn_pesq=  document.getElementById('btn_pesq');

const f_txtpesq= document.getElementById('f_txtpesq');

btn_pesq.addEventListener("click", (evt)=>{

    const valorpesq= f_txtpesq.value;
    if (valorpesq.value==""){

        alert("Digite o que deseja pesquisar");
        f_txtpesq.focus();
    }

    const f_pesq= document.querySelector('input[name=f_pesq]:checked').value;

    const endpoint= `http://127.0.0.1:1880/pesquisarcontatos/${f_pesq}/${valorpesq}`; // cria a URL de pesquisa
    fetch(endpoint)
    .then(res=>res.json())
    .then(res=>{
        console.log(res);

        const resultado= document.getElementById('resultado');

        resultado.innerHTML= "";

        if(res.length==0){
            const DivErro= document.createElement('div');
            DivErro.classList.add('containerDiv');
            DivErro.innerHTML= "Nenhum registro encontrado";
            resultado.appendChild(DivErro);

            console.log("Nenhum registro encontrado");
            return;
        } else{

            res.forEach((res)=>{

        
                const containerDiv= document.createElement('div');
                containerDiv.classList.add('containerDiv');

                const divId= document.createElement('div');
                divId.innerHTML= `Id: ${res.n_contato_contato}`
                ;
                containerDiv.appendChild(divId);
            
                const divNome= document.createElement('div');
                divNome.innerHTML= `Nome: ${res.s_nome_contato}`;
                containerDiv.appendChild(divNome); 

                const dataNasc= document.createElement('div');
                dataNasc.innerHTML= ` Data de nascimento: ${res.dt_dtnasc_contato}`;
                containerDiv.appendChild(dataNasc);
            
                const divEmail= document.createElement('div');
                divEmail.innerHTML= `Email: ${res.s_email_contato}`;
             containerDiv.appendChild(divEmail);


            resultado.appendChild(containerDiv);
        })
    } 
    })
   

  

})