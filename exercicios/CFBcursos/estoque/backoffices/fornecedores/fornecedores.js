import {Cxmsg} from '../../utils/cxmsg.js';

const dadosGrid= document.getElementById('dadosGrid');
const btn_add= document.getElementById('btn_add');
const novoFornecedor= document.getElementById('novoFornecedor');
const btn_fechar= document.getElementById('btn_fechar');
const btn_gravar= document.getElementById('btn_gravar');
const btn_cancelar= document.getElementById('btn_cancelar');
const f_nome= document.getElementById('f_nome');
const f_status= document.getElementById('f_status');
const f_foto= document.getElementById('f_foto');
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
    carregarTodosFornecedores();
});



// n= novo colaborador, e= editar colaborador
let modojanela= 'n';
const serv= sessionStorage.getItem('servidor_nodered');//pegando o servidor do nodered 



  
  
const carregarTodosFornecedores=()=>{
    const endpoint_todosfornecedores= `${serv}todosfornecedores`;
fetch(endpoint_todosfornecedores)
.then(res=> res.json())
.then(res=>{
    dadosGrid.innerHTML= '';

    res.forEach(item=>{
      criarLinha(item);
    })
});
}

carregarTodosFornecedores();

const criarLinha=(item)=>{
    const linhaGrid= document.createElement('div');
    linhaGrid.setAttribute('class', 'linhaGrid');

    const divc1= document.createElement('div');
    divc1.setAttribute('class', 'colunaLinhaGrid c1');
    divc1.textContent= item.n_fornecedor_fornecedor;
    linhaGrid.appendChild(divc1);

    const divc2= document.createElement('div');
    divc2.setAttribute('class', 'colunaLinhaGrid c2');
    divc2.textContent= item.s_desc_fornecedor;
    linhaGrid.appendChild(divc2);

    const divc3= document.createElement('div');
    divc3.setAttribute('class', 'colunaLinhaGrid c3');
    divc3.textContent= item.c_status_fornecedor;        
    linhaGrid.appendChild(divc3);

    const divc4= document.createElement('div');
    divc4.setAttribute('class', 'colunaLinhaGrid c4');
    linhaGrid.appendChild(divc4);

    const img_status= document.createElement('img');
    if(item.c_status_fornecedor==='A'){
        img_status.setAttribute('src', '../../imgs/on.svg');
        img_status.setAttribute('class', 'img_on iconeop');
    }else{
        img_status.setAttribute('src', '../../imgs/off.svg');
        img_status.setAttribute('class', 'img_off iconeop');
    }
    
    img_status.setAttribute('data-idfornecedor', item.n_fornecedor_fornecedor);
    img_status.addEventListener('click', (evt)=>{
        const idfornecedor= evt.target.getAttribute('data-idfornecedor');
        if(evt.target.getAttribute('src').includes('on')){
            const endpoint_mudarStatus= `${serv}mudarStatusFornecedor/${idfornecedor}/I`;
            fetch(endpoint_mudarStatus)
            .then(res=>{
                if(res.status===200){
                    evt.target.setAttribute('src', '../../imgs/off.svg');
                    evt.target.parentNode.parentNode.childNodes[2].textContent= 'I';
                    evt.target.setAttribute('class', 'img_off iconeop');
                }
            })
            }else{
                const endpoint_mudarStatus= `${serv}mudarStatusFornecedor/${idfornecedor}/A`;
                fetch(endpoint_mudarStatus)
                .then(res=>{
                    if(res.status==200){
                        evt.target.setAttribute('src', '../../imgs/on.svg');
                        evt.target.parentNode.parentNode.childNodes[2].textContent= 'A';
                        evt.target.setAttribute('class', 'img_on iconeop');
                    }
                })
            }
    });
    divc4.appendChild(img_status);

    const img_editar= document.createElement('img');
    img_editar.setAttribute('src', '../../imgs/editar.svg');
    img_editar.setAttribute('class', 'img_editar iconeop');
    img_editar.addEventListener('click', (evt)=>{
        modojanela= 'e';
        document.getElementById('tituloPopup').textContent= 'Editar Fornecedor';

        const id= evt.target.parentNode.parentNode.firstChild.innerHTML; 

        let endpoint= `${serv}dadosfornecedor/${id}`;
        fetch(endpoint)
        .then(res=> res.json())
        .then(res=>{
            btn_gravar.setAttribute('data-idfornecedor', id);

            f_nome.value= res[0].s_desc_fornecedor;
            f_status.value= res[0].c_status_fornecedor;
            img_foto.src= res[0].s_logo_fornecedor;
            

            novoFornecedor.classList.remove('ocultarPopup');
        })


    })
    divc4.appendChild(img_editar);

    const img_excluir= document.createElement('img');
    img_excluir.setAttribute('src', '../../imgs/deletar.svg');
    img_excluir.setAttribute('class', 'img_excluir iconeop');
    divc4.appendChild(img_excluir);

    dadosGrid.appendChild(linhaGrid);
}


btn_add.addEventListener('click', (evt)=>{
    modojanela= 'n';
    novoFornecedor.classList.remove('ocultarPopup')
    document.getElementById('tituloPopup').textContent= 'Novo Fornecedor';

    f_nome.value= '';
    f_status.value= '';
    img_foto.src= '';
})

btn_fechar.addEventListener('click', (evt)=>{
    novoFornecedor.classList.add('ocultarPopup')
    
})

btn_cancelar.addEventListener('click', (evt)=>{
    novoFornecedor.classList.add('ocultarPopup')
})

// 

btn_gravar.addEventListener('click', (evt) => {
    if (f_nome.value.trim() === '') {

        const config={
            titulo: "Alerta",
            texto: "Informe o nome do colaborador",
            cor: "blue",
            tipo: "ok",
            comandook: ()=>{},
            comandosim: ()=>{},
            comandonao: ()=>{}
        }
        Cxmsg.mostrar(config)
 
    } else {

        const dados = {
            n_fornecedor_fornecedor: evt.target.dataset.idfornecedor,
            s_desc_fornecedor: f_nome.value,
            c_status_fornecedor: f_status.value,
            s_logo_fornecedor: img_foto.getAttribute('src')
        };

        const cab = {
            method: 'post',
            body: JSON.stringify(dados)
        };

        let endpointnovoeditarfornecedor = null;
        if (modojanela == 'n') {
            endpointnovoeditarfornecedor = `${serv}novofornecedor`;
        } else {
            endpointnovoeditarfornecedor = `${serv}editarfornecedor`;
        }

        fetch(endpointnovoeditarfornecedor, cab)
            .then(res => {
                if (res.status === 200) {
                    if(modojanela === 'n'){
                        const config={
                            titulo: "Alerta",
                            texto: "Fornecedor gravado com sucesso",
                            cor: "blue",
                            tipo: "ok",
                            comandook: ()=>{},
                            comandosim: ()=>{},
                            comandonao: ()=>{}
                        }
                        Cxmsg.mostrar(config)
                        carregarTodosFornecedores();
                    }else{
                        const config={
                            titulo: "ERRO",
                            texto: "Fornecedor editado com sucesso",
                            cor: "blue",
                            tipo: "ok",
                            comandook: ()=>{},
                            comandosim: ()=>{},
                            comandonao: ()=>{}
                        }
                        Cxmsg.mostrar(config)
                        carregarTodosFornecedores();
                    } 

                    f_nome.value = '';
                    f_status.value = '';
                    img_foto.src = '';
                } else {
                    alert('Erro ao gravar os dados');
                }
            })
            .catch(err => {
                console.error('Erro na requisição:', err);
            });

        novoFornecedor.classList.add('ocultarPopup');
    }
}); 


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

