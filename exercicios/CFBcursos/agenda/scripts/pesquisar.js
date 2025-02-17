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

        const dados= document.getElementById('dados');

        dados.innerHTML= "";

        if(res.length==0){
            const DivErro= document.createElement('div');
            DivErro.classList.add('containerDiv');
            DivErro.innerHTML= "Nenhum registro encontrado";
            DivErro.style.display= "flex";
            DivErro.style.justifyContent= "center";
            DivErro.style.alignItems= "center";
            dados.appendChild(DivErro);

            return;
        } else{


            res.forEach((el)=>{
            
                const linha= document.createElement('div');
                linha.setAttribute('class', 'linhadados');

                const c1= document.createElement('div');
                c1.setAttribute('class', 'coluna c1');
                c1.innerHTML= el.n_contato_contato;
                linha.appendChild(c1);

                const c2= document.createElement('div');
                c2.setAttribute('class', 'coluna c2');
                c2.innerHTML= el.s_nome_contato
                ;
                linha.appendChild(c2);

                const c3= document.createElement('div');
                c3.setAttribute('class', 'coluna c3');
                c3.innerHTML= el.s_celular_contato;
                linha.appendChild(c3);

                const c4= document.createElement('div');
                c4.setAttribute('class', 'coluna c4');
                c4.innerHTML= el.s_email_contato;
                linha.appendChild(c4);

                const c5= document.createElement('div');
                c5.setAttribute('class', 'coluna c5');
                c5.innerHTML= el.dt_dtnasc_contato; 
                linha.appendChild(c5);
               
                dados.appendChild(linha);
        })
    } 
    })
   

  

})