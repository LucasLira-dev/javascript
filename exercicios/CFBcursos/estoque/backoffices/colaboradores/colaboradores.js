const dadosGrid= document.getElementById('dadosGrid');
const btn_add= document.getElementById('btn_add');
const novoColaborador= document.getElementById('novoColaborador');
const btn_fechar= document.getElementById('btn_fechar');
const btn_gravar= document.getElementById('btn_gravar');
const btn_cancelar= document.getElementById('btn_cancelar');
const telefones= document.getElementById('telefones');
const f_telefone= document.getElementById('f_telefone');
const f_nome= document.getElementById('f_nome');
const f_tipoColab= document.getElementById('f_tipoColab');
const f_status= document.getElementById('f_status');

const f_foto= document.getElementById('f_foto');
const img_foto= document.getElementById('img_foto');

// n= novo colaborador, e= editar colaborador
let modojanela= 'n';
const serv= sessionStorage.getItem('servidor_nodered');//pegando o servidor do nodered 


const criarCxTelefone=(fone, idtel, tipo)=>{
    const divTel= document.createElement('div');
    divTel.setAttribute('class', 'tel');

      // Verifica se o número já existe na lista
      const numerosExistentes = [...document.querySelectorAll('.numTel')].map(tel => tel.textContent.trim());
      if (numerosExistentes.includes(fone.trim())) {
          return; // Sai da função se o número já existir
      }
  

      
      const divNumTel = document.createElement('div');
      divNumTel.setAttribute('class', tipo === "n" ? 'numTel novoTel' : 'numTel editarTel');
      divNumTel.textContent = fone;
  
      const Lixeira = document.createElement('img');
      Lixeira.setAttribute('src', '../../imgs/deletar.svg');
      Lixeira.setAttribute('class', 'delTel');
      Lixeira.setAttribute("data-idtel", idtel);
  
      Lixeira.addEventListener('click', (evt) => {
         
        const objTel = evt.target;
        const idtel = objTel.getAttribute('data-idtel'); 
        if (idtel !== '-1') {
  
              const endpoint_delTelefone = `${serv}deltelefone/${idtel}`;
              fetch(endpoint_delTelefone)
                  .then(res => {
                      if (res.status === 200) {
                          evt.target.parentElement.remove();
                      }
                  });
          } else {
              evt.target.parentElement.remove();
          }
      });
  
      divTel.appendChild(divNumTel);
      divTel.appendChild(Lixeira);
      telefones.appendChild(divTel);
  };

 
  
const carregarTodosColabs=()=>{
    const endpoint_todoscolaboradores= `${serv}todosusuarios`;
fetch(endpoint_todoscolaboradores)
.then(res=> res.json())
.then(res=>{
    dadosGrid.innerHTML= '';

    res.forEach(item=>{
        const linhaGrid= document.createElement('div');
        linhaGrid.setAttribute('class', 'linhaGrid');

        const divc1= document.createElement('div');
        divc1.setAttribute('class', 'colunaLinhaGrid c1');
        divc1.textContent= item.n_usuario_usuario;
        linhaGrid.appendChild(divc1);

        const divc2= document.createElement('div');
        divc2.setAttribute('class', 'colunaLinhaGrid c2');
        divc2.textContent= item.s_nome_usuario;
        linhaGrid.appendChild(divc2);

        const divc3= document.createElement('div');
        divc3.setAttribute('class', 'colunaLinhaGrid c3');
        divc3.textContent= item.n_tipousuario_tipousuario
        ;
        linhaGrid.appendChild(divc3);

        const divc4= document.createElement('div');
        divc4.setAttribute('class', 'colunaLinhaGrid c4');
        divc4.textContent= item.c_status_usuario;        
        linhaGrid.appendChild(divc4);

        const divc5= document.createElement('div');
        divc5.setAttribute('class', 'colunaLinhaGrid c5');
        linhaGrid.appendChild(divc5);

        // const img_status= document.createElement('img');
        // img_status.setAttribute('src', '../../imgs/on.svg');
        // img_status.setAttribute('class', 'img_on iconeop');
        // divc5.appendChild(img_status);

        const img_editar= document.createElement('img');
        img_editar.setAttribute('src', '../../imgs/editar.svg');
        img_editar.setAttribute('class', 'img_editar iconeop');
        img_editar.addEventListener('click', (evt)=>{
            modojanela= 'e';
            telefones.innerHTML= '';
            document.getElementById('tituloPopup').textContent= 'Editar Colaborador';

            const id= evt.target.parentNode.parentNode.firstChild.innerHTML;

            let endpoint= `${serv}dadoscolab/${id}`;
            fetch(endpoint)
            .then(res=> res.json())
            .then(res=>{
                btn_gravar.setAttribute('data-idcolab', id);

                f_nome.value= res[0].s_nome_usuario;
                f_tipoColab.value= res[0].n_tipousuario_tipousuario;
                f_status.value= res[0].c_status_usuario;
                img_foto.src= res[0].s_foto_usuario;


                novoColaborador.classList.remove('ocultarPopup');
            })

            endpoint= `${serv}telefonescolab/${id}`;
            fetch(endpoint)
            .then(res=> res.json())
            .then(res=>{
                res.forEach(t=>{
                    criarCxTelefone(t.s_numero_telefone, t.n_telefone_telefone, "e");
                    carregarTodosColabs
                })
                
                novoColaborador.classList.remove('ocultarPopup');
            })


        })
        divc5.appendChild(img_editar);

        const img_excluir= document.createElement('img');
        img_excluir.setAttribute('src', '../../imgs/deletar.svg');
        img_excluir.setAttribute('class', 'img_excluir iconeop');
        divc5.appendChild(img_excluir);

        dadosGrid.appendChild(linhaGrid);
    })
});
}

carregarTodosColabs();

const endpoint_tiposColab= `${serv}tiposcolab`;
fetch(endpoint_tiposColab)
.then(res=> res.json())
.then(res=>{
   f_tipoColab.innerHTML= '';
    res.forEach(item=>{
         const opt= document.createElement('option');
         opt.setAttribute('value', item.n_tipousuario_tipousuario);
         opt.textContent= item.s_desc_tipousuario;
         f_tipoColab.appendChild(opt);
    })
   
});

btn_add.addEventListener('click', (evt)=>{
    modojanela= 'n';
    novoColaborador.classList.remove('ocultarPopup')
    document.getElementById('tituloPopup').textContent= 'Novo Colaborador';

    f_nome.value= '';
    f_tipoColab.value= '';
    f_status.value= '';
    img_foto.src= '';
    telefones.innerHTML= '';
})

btn_fechar.addEventListener('click', (evt)=>{
    novoColaborador.classList.add('ocultarPopup')
})

btn_cancelar.addEventListener('click', (evt)=>{
    novoColaborador.classList.add('ocultarPopup')
})

// 

btn_gravar.addEventListener('click', (evt) => {
    if (f_nome.value.trim() === '' || telefones.children.length === 0) {
        alert('Informe o nome do colaborador e pelo menos um telefone');
    } else {
        // Coleta todos os números de telefone (novos e existentes)
        const todosNumeros = [...document.querySelectorAll('.numTel')].map(tel => tel.textContent.trim());

        const dados = {
            n_usuario_usuario: evt.target.dataset.idcolab,
            s_nome_usuario: f_nome.value,
            n_tipousuario_tipousuario: f_tipoColab.value,
            c_status_usuario: f_status.value,
            numtelefones: todosNumeros, // Envia todos os números
            s_foto_usuario: img_foto.getAttribute('src')
        };

        const cab = {
            method: 'post',
            body: JSON.stringify(dados)
        };

        let endpointnovoeditarcolab = null;
        if (modojanela == 'n') {
            endpointnovoeditarcolab = `${serv}novocolab`;
        } else {
            endpointnovoeditarcolab = `${serv}editarcolab`;
        }

        fetch(endpointnovoeditarcolab, cab)
            .then(res => {
                if (res.status === 200) {
                    alert(modojanela === 'n' ? 'Colaborador cadastrado com sucesso' : 'Colaborador atualizado com sucesso');

                    f_nome.value = '';
                    f_tipoColab.value = '';
                    f_status.value = '';
                    img_foto.src = '';
                    telefones.innerHTML = '';
                    carregarTodosColabs();
                } else {
                    alert('Erro ao cadastrar/editar colaborador');
                }
            })
            .catch(err => {
                console.error('Erro na requisição:', err);
            });

        novoColaborador.classList.add('ocultarPopup');
    }
});


f_telefone.addEventListener('keyup', (evt)=>{
    if(evt.key==="Enter" && evt.target.value.trim()!=='' && evt.target.value.length>=8 && evt.target.value.length<=11){
        criarCxTelefone(evt.target.value, '-1', "n");
    }else{
        if(evt.key==="Enter"){
            alert('Informe um número de telefone válido');
        }
    }
})

const converte_imagem_b64= (localDestino, arquivoimg)=>{
    const obj= arquivoimg
    const reader= new FileReader();
    reader.addEventListener('load', ()=>{
        localDestino.src= reader.result;
    })
    if(obj){
        reader.readAsDataURL(obj);
    }
}

f_foto.addEventListener('change', (evt)=>{
   converte_imagem_b64(img_foto, evt.target.files[0]); 
})

