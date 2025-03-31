import {Cxmsg} from '../../utils/cxmsg.js';

const novoProduto= document.getElementById('novoProduto');

const dadosGrid= document.getElementById('dadosGrid');
const btn_add= document.getElementById('btn_add');

const btn_fechar= document.getElementById('btn_fechar');
const btn_gravar= document.getElementById('btn_gravar');
const btn_cancelar= document.getElementById('btn_cancelar');
const f_descprod= document.getElementById('f_descprod');
const f_tipoprod= document.getElementById('f_tipoprod');
const f_statusprod= document.getElementById('f_statusprod');
const f_codprod= document.getElementById('f_codprod');
const f_qtdeprod= document.getElementById('f_qtdeprod');
const f_fornprod= document.getElementById('f_fornprod');


const img_foto= document.getElementById('img_foto');

const f_filtragem= document.getElementById('f_filtragem');

const pesquisa= document.getElementById('pesquisa');
const btn_fecharPopupPesq= document.getElementById('btn_fecharPopupPesq');
const btn_pesq= document.getElementById('btn_pesq');
const f_pesq= document.getElementById('f_pesq');
const f_pesqId= document.getElementById('f_pesqId');
const f_pesqNome= document.getElementById('f_pesqNome');
const btn_listarTudo= document.getElementById('btn_listarTudo');

const btn_pesquisar= document.getElementById('btn_pesquisar');


f_filtragem.addEventListener('keyup', (evt)=>{
    const linhas= [...document.querySelectorAll('.linhaGrid')];
    let input, texto, filtragem;
    input = evt.target;
    filtragem = input.value.toUpperCase();
    for (let i = 0; i < linhas.length; i++) {
      texto= linhas[i].children[1].innerHTML
        if (texto.toUpperCase().indexOf(filtragem) > -1) {
            linhas[i].classList.remove('ocultarLinhaGrid');
        } else {
            linhas[i].classList.add('ocultarLinhaGrid');
        }
    }
});

btn_pesq.addEventListener('click', (evt)=>{
    pesquisa.classList.remove('ocultarPopup');
    f_pesq.value= '';
    f_pesq.focus();
});


btn_fecharPopupPesq.addEventListener('click', (evt)=>
{
    pesquisa.classList.add('ocultarPopup');
});

f_pesqId.addEventListener('click', (evt)=>{
    f_pesq.value= '';
    f_pesq.focus();
})
f_pesqNome.addEventListener('click', (evt)=>{
    f_pesq.value= '';
    f_pesq.focus();
})


btn_pesquisar.addEventListener('click', (evt)=>{
    let tipo= null;
    if(f_pesqId.checked){
        tipo= 'id';
    }else{
        tipo= 'nome';
    }
    if(f_pesq.value!= ''){
        const endpointpesq= `${serv}pesquisacolab/${tipo}/${f_pesq.value}`;
        fetch(endpointpesq)
        .then(res=> res.json())
        .then(res=>{
            dadosGrid.innerHTML= '';
            res.forEach(item=>{
                criarLinha(item);
            })
        })

        pesquisa.classList.add('ocultarPopup');
    }else{

        const config={
                titulo: "Alerta",
                texto: "Informe um nome ou id para pesquisar",
                cor: "blue",
                tipo: "ok",
                comandook: ()=>{},
                comandosim: ()=>{},
                comandonao: ()=>{}
            }
        Cxmsg.mostrar(config)
        f_pesq.focus();
    }
});

btn_listarTudo.addEventListener('click', (evt)=>{
    carregarTodosColabs()
});



// n= novo produto, e= editar produto
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
    const endpoint_todosprodutoes= `${serv}todaspessoas`;
fetch(endpoint_todosprodutoes)
.then(res=> res.json())
.then(res=>{
    dadosGrid.innerHTML= '';

    res.forEach(item=>{
      criarLinha(item);
    })
});
}

carregarTodosColabs();

const criarLinha=(item)=>{
    const linhaGrid= document.createElement('div');
    linhaGrid.setAttribute('class', 'linhaGrid');

    const divc1= document.createElement('div');
    divc1.setAttribute('class', 'colunaLinhaGrid c1');
    divc1.textContent= item.n_pessoa_pessoa;
    linhaGrid.appendChild(divc1);

    const divc2= document.createElement('div');
    divc2.setAttribute('class', 'colunaLinhaGrid c2');
    divc2.textContent= item.s_nome_pessoa;
    linhaGrid.appendChild(divc2);

    const divc3= document.createElement('div');
    divc3.setAttribute('class', 'colunaLinhaGrid c3');
    divc3.textContent= item.n_tipopessoa_tipopessoa
    ;
    linhaGrid.appendChild(divc3);

    const divc4= document.createElement('div');
    divc4.setAttribute('class', 'colunaLinhaGrid c4');
    divc4.textContent= item.c_status_pessoa;        
    linhaGrid.appendChild(divc4);

    const divc5= document.createElement('div');
    divc5.setAttribute('class', 'colunaLinhaGrid c5');
    linhaGrid.appendChild(divc5);

    const img_status= document.createElement('img');
    if(item.c_status_pessoa==='A'){
        img_status.setAttribute('src', '../../imgs/on.svg');
        img_status.setAttribute('class', 'img_on iconeop');
    }else{
        img_status.setAttribute('src', '../../imgs/off.svg');
        img_status.setAttribute('class', 'img_off iconeop');
    }
    
    img_status.setAttribute('data-idcolab', item.n_pessoa_pessoa);
    img_status.addEventListener('click', (evt)=>{
        const idcolab= evt.target.getAttribute('data-idcolab');
        if(evt.target.getAttribute('src').includes('on')){
            const endpoint_mudarStatus= `${serv}mudarstatuscolab/${idcolab}/I`;
            fetch(endpoint_mudarStatus)
            .then(res=>{
                if(res.status===200){
                    evt.target.setAttribute('src', '../../imgs/off.svg');
                    evt.target.parentNode.parentNode.childNodes[3].textContent= 'I';
                    evt.target.setAttribute('class', 'img_off iconeop');
                }
            })
            }else{
                const endpoint_mudarStatus= `${serv}mudarstatuscolab/${idcolab}/A`;
                fetch(endpoint_mudarStatus)
                .then(res=>{
                    if(res.status==200){
                        evt.target.setAttribute('src', '../../imgs/on.svg');
                        evt.target.parentNode.parentNode.childNodes[3].textContent= 'A';
                        evt.target.setAttribute('class', 'img_on iconeop');
                    }
                })
            }
    });
    divc5.appendChild(img_status);

    const img_editar= document.createElement('img');
    img_editar.setAttribute('src', '../../imgs/editar.svg');
    img_editar.setAttribute('class', 'img_editar iconeop');
    img_editar.addEventListener('click', (evt)=>{
        modojanela= 'e';
        telefones.innerHTML= '';
        document.getElementById('tituloPopup').textContent= 'Editar Pessoa';

        const id= evt.target.parentNode.parentNode.firstChild.innerHTML;

        let endpoint= `${serv}dadoscolab/${id}`;
        fetch(endpoint)
        .then(res=> res.json())
        .then(res=>{
            btn_gravar.setAttribute('data-idcolab', id);

            f_nome.value= res[0].s_nome_pessoa;
            f_tipoColab.value= res[0]. n_tipopessoa_tipopessoa;
            f_status.value= res[0].c_status_pessoa;
            img_foto.src= res[0].s_foto_pessoa;
            

            novoProduto.classList.remove('ocultarPopup');
        })

        endpoint= `${serv}telefonescolab/${id}`;
        fetch(endpoint)
        .then(res=> res.json())
        .then(res=>{
            res.forEach(t=>{
                criarCxTelefone(t.s_numero_telefone, t.n_telefone_telefone, "e");
                
            })
            
            novoProduto.classList.remove('ocultarPopup');
        })


    })
    divc5.appendChild(img_editar);

    const img_excluir= document.createElement('img');
    img_excluir.setAttribute('src', '../../imgs/deletar.svg');
    img_excluir.setAttribute('class', 'img_excluir iconeop');
    divc5.appendChild(img_excluir);

    dadosGrid.appendChild(linhaGrid);
}



btn_gravar.addEventListener('click', (evt) => {
    if (f_nome.value.trim() === '' || telefones.children.length === 0) {

        const config={
            titulo: "Alerta",
            texto: "Informe o nome da pessoa e pelo menos um telefone",
            cor: "blue",
            tipo: "ok",
            comandook: ()=>{},
            comandosim: ()=>{},
            comandonao: ()=>{}
        }
 
    } else {
        // Coleta todos os números de telefone (novos e existentes)
        const todosNumeros = [...document.querySelectorAll('.numTel')].map(tel => tel.textContent.trim());
        
        const dados = {
            n_pessoa_pessoa: evt.target.dataset.idcolab,
            s_nome_pessoa: f_nome.value,
            n_tipopessoa_tipopessoa: f_tipoColab.value,
            c_status_pessoa: f_status.value,
            numtelefones: todosNumeros, // Envia todos os números
            s_foto_pessoa: img_foto.getAttribute('src')
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
                    alert(modojanela === 'n' ? 'Pessoa cadastrada com sucesso' : 'Pessoa atualizada com sucesso');

                    f_nome.value = '';
                    f_tipoColab.value = '';
                    f_status.value = '';
                    img_foto.src = '';
                    telefones.innerHTML = '';
                    carregarTodosColabs();
                } else {

                    const config={
                        titulo: "ERRO",
                        texto: "Erro ao gravar nova pessoa",
                        cor: "blue",
                        tipo: "ok",
                        comandook: ()=>{},
                        comandosim: ()=>{},
                        comandonao: ()=>{}
                    }
                   
                }
            })
            .catch(err => {
                console.error('Erro na requisição:', err);
            });

        novoProduto.classList.add('ocultarPopup');
    }
});


const listaTiposProd=()=>{
    const endpoint_tiposprod= `${serv}tiposprod`;
fetch(endpoint_tiposprod)
.then(res=> res.json())
.then(res=>{
   f_tipoprod.innerHTML= '';
    res.forEach(item=>{
         const opt= document.createElement('option');
         opt.setAttribute('value', item.n_tipoproduto_tipoproduto);
         opt.textContent= item.s_desc_tipoproduto;
         f_tipoprod.appendChild(opt);
    })
.catch(err=>{
    console.error('Erro:', err);
})
});
}

btn_add.addEventListener('click', (evt)=>{
    modojanela= 'n';
    novoProduto.classList.remove('ocultarPopup')
    document.getElementById('tituloPopup').textContent= 'Novo Produto';

    f_codprod.value= '';
    f_descprod.value= '';
    f_qtdeprod.value= '1';
    f_tipoprod.value= '';
    f_fornprod.value= '';
    f_statusprod.value= 'A';
    listaTiposProd();
  
})

btn_fechar.addEventListener('click', (evt)=>{
    novoProduto.classList.add('ocultarPopup')
    
})

btn_cancelar.addEventListener('click', (evt)=>{
    novoProduto.classList.add('ocultarPopup')
})

// 

// 



