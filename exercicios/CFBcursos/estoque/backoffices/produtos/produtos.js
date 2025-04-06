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


const f_filtragem= document.getElementById('f_filtragem');

const pesquisa= document.getElementById('pesquisa');
const btn_fecharPopupPesq= document.getElementById('btn_fecharPopupPesq');
const btn_pesq= document.getElementById('btn_pesq');
const f_pesq= document.getElementById('f_pesq');
const f_pesqId= document.getElementById('f_pesqId');
const f_pesqNome= document.getElementById('f_pesqNome');
const btn_listarTudo= document.getElementById('btn_listarTudo');

const btn_pesquisar= document.getElementById('btn_pesquisar');

const movEstoque= document.getElementById('movEstoque');
const btn_fecharPopupMov= document.getElementById('btn_fecharPopupMov');
const btn_addqtde= document.getElementById('btn_addqtde');
const btn_removeqtde= document.getElementById('btn_removeqtde');
const f_codprodmov= document.getElementById('f_codprodmov');
const f_descprodmov= document.getElementById('f_descprodmov');
const f_qtdeprodmov= document.getElementById('f_qtdeprodmov');
const f_qtdeprodregmov= document.getElementById('f_qtdeprodregmov');
const btn_gravarmov= document.getElementById('btn_gravarmov');

const serv= sessionStorage.getItem('servidor_nodered');//pegando o servidor do nodered 



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
});
}

const listaFornProd=()=>{
    const endpoint_fornprod= `${serv}fornprod`;
fetch(endpoint_fornprod)
.then(res=> res.json())
.then(res=>{
   f_fornprod.innerHTML= '';
    res.forEach(item=>{
         const opt= document.createElement('option');
         opt.setAttribute('value', item.n_fornecedor_fornecedor);
         opt.textContent= item.s_desc_fornecedor;
         f_fornprod.appendChild(opt);
    })
});
}

listaTiposProd();
listaFornProd();


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
        const endpointpesq= `${serv}pesquisaprod/${tipo}/${f_pesq.value}`;
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
    carregarTodosProds()
});



// n= novo produto, e= editar produto
let modojanela= 'n';


// const criarCxTelefone=(fone, idtel, tipo)=>{
//     const divTel= document.createElement('div');
//     divTel.setAttribute('class', 'tel');

//       // Verifica se o número já existe na lista
//       const numerosExistentes = [...document.querySelectorAll('.numTel')].map(tel => tel.textContent.trim());
//       if (numerosExistentes.includes(fone.trim())) {
//           return; // Sai da função se o número já existir
//       }
  

      
//       const divNumTel = document.createElement('div');
//       divNumTel.setAttribute('class', tipo === "n" ? 'numTel novoTel' : 'numTel editarTel');
//       divNumTel.textContent = fone;
  
//       const Lixeira = document.createElement('img');
//       Lixeira.setAttribute('src', '../../imgs/deletar.svg');
//       Lixeira.setAttribute('class', 'delTel');
//       Lixeira.setAttribute("data-idtel", idtel);
  
//       Lixeira.addEventListener('click', (evt) => {
         
//         const objTel = evt.target;
//         const idtel = objTel.getAttribute('data-idtel'); 
//         if (idtel !== '-1') {
  
//               const endpoint_delTelefone = `${serv}deltelefone/${idtel}`;
//               fetch(endpoint_delTelefone)
//                   .then(res => {
//                       if (res.status === 200) {
//                           evt.target.parentElement.remove();
//                       }
//                   });
//           } else {
//               evt.target.parentElement.remove();
//           }
//       });
  
//       divTel.appendChild(divNumTel);
//       divTel.appendChild(Lixeira);
//       telefones.appendChild(divTel);
//   };

  
  
const carregarTodosProds=()=>{
    const endpoint_todosprods= `${serv}todosprods`;
fetch(endpoint_todosprods)
.then(res=> res.json())
.then(res=>{
    dadosGrid.innerHTML= '';

    res.forEach(item=>{
      criarLinha(item);
    })
});
}

carregarTodosProds();

const criarLinha=(item)=>{
    const linhaGrid= document.createElement('div');
    linhaGrid.setAttribute('class', 'linhaGrid');

    const divc1= document.createElement('div');
    divc1.setAttribute('class', 'colunaLinhaGrid c1');
    divc1.textContent= item.n_cod_produto;
    linhaGrid.appendChild(divc1);

    const divc2= document.createElement('div');
    divc2.setAttribute('class', 'colunaLinhaGrid c2');
    divc2.textContent= item.s_desc_produto
    linhaGrid.appendChild(divc2);

    const divc3= document.createElement('div');
    divc3.setAttribute('class', 'colunaLinhaGrid c3');
    divc3.textContent= item.n_qtde_produto
    linhaGrid.appendChild(divc3);

    // const divc4= document.createElement('div');
    // divc4.setAttribute('class', 'colunaLinhaGrid c4');
    // divc4.textContent= item.n_fornecedor_fornecedor;        
    // linhaGrid.appendChild(divc4);

    const divc4= document.createElement('div');
    divc4.setAttribute('class', 'colunaLinhaGrid c4');
    divc4.textContent= item.c_status_produto;        
    linhaGrid.appendChild(divc4);

    const divc5= document.createElement('div');
    divc5.setAttribute('class', 'colunaLinhaGrid c5');
    linhaGrid.appendChild(divc5);

    const img_status= document.createElement('img');
    if(item.c_status_produto==='A'){
        img_status.setAttribute('src', '../../imgs/on.svg');
        img_status.setAttribute('class', 'img_on iconeop');
    }else{
        img_status.setAttribute('src', '../../imgs/off.svg');
        img_status.setAttribute('class', 'img_off iconeop');
    }
    
    img_status.setAttribute('data-idprod', item.n_cod_produto);
    img_status.addEventListener('click', (evt)=>{
        const idprod= evt.target.getAttribute('data-idprod');
        if(evt.target.getAttribute('src').includes('on')){
            const endpoint_mudarStatus= `${serv}mudarStatusProd/${idprod}/I`;
            fetch(endpoint_mudarStatus)
            .then(res=>{
                if(res.status===200){
                    evt.target.setAttribute('src', '../../imgs/off.svg');
                    evt.target.parentNode.parentNode.childNodes[3].textContent= 'I';
                    evt.target.setAttribute('class', 'img_off iconeop');
                }
            })
            }else{
                const endpoint_mudarStatus= `${serv}mudarStatusProd/${idprod}/A`;
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
        document.getElementById('tituloPopup').textContent= 'Editar Produto';

        const id= evt.target.parentNode.parentNode.firstChild.innerHTML;

        let endpoint= `${serv}dadosproduto/${id}`;
        fetch(endpoint)
        .then(res=> res.json())
        .then(res=>{
            btn_gravar.setAttribute('data-idprod', id);

            f_codprod.value= res[0].n_cod_produto;
            f_descprod.value= res[0].s_desc_produto;
            f_qtdeprod.value= res[0].n_qtde_produto;
            f_tipoprod.value= res[0].n_tipoProduto_tipoProduto;
            f_fornprod.value= res[0].n_fornecedor_fornecedor;
            f_statusprod.value= res[0].c_status_produto;
            
            novoProduto.classList.remove('ocultarPopup');
        })
    })
    divc5.appendChild(img_editar);

    const img_movimentar= document.createElement('img');
    img_movimentar.setAttribute('src', '../../imgs/mov.svg');
    img_movimentar.setAttribute('class', 'img_excluir iconeop');
    img_movimentar.addEventListener('click', (evt)=>{
        const st= evt.target.parentNode.parentNode.childNodes[3].textContent;
        if(st==='A'){
            movEstoque.classList.remove('ocultarPopup');
            f_codprodmov.value = evt.target.parentNode.parentNode.firstChild.innerHTML;
            f_descprodmov.value = evt.target.parentNode.parentNode.childNodes[1].innerHTML;
            f_qtdeprodmov.value = evt.target.parentNode.parentNode.childNodes[2].innerHTML;

        }else{
            const config={
                titulo: "Alerta",
                texto: "Produto inativo não pode ser editado",
                cor: "blue",
                tipo: "ok",
                comandook: ()=>{},
                comandosim: ()=>{},
                comandonao: ()=>{}
            }
            Cxmsg.mostrar(config)
        }
    });
    divc5.appendChild(img_movimentar);

    dadosGrid.appendChild(linhaGrid);
}

btn_gravarmov.addEventListener('click', (evt)=>{
    const dados ={
        n_cod_produto: f_codprodmov.value,
        n_qtde_produto: f_qtdeprodmov.value
    }

    const cab = {
        method: 'post',
        body: JSON.stringify(dados)
    }

    const endpointmov= `${serv}editarmovprod`;
    fetch(endpointmov, cab)
    .then(res=>{
        carregarTodosProds();
        movEstoque.classList.add('ocultarPopup');
    })
})

btn_fecharPopupMov.addEventListener('click', (evt)=>{
    movEstoque.classList.add('ocultarPopup');
})

btn_addqtde.addEventListener('click', (evt)=>{
    let qtdeatual= parseInt(f_qtdeprodmov.value);
    let qtdeadd=  parseInt(f_qtdeprodregmov.value);

    if(qtdeadd<0){
        const config={
            titulo: "Alerta",
            texto: "Adicione uma quantidade",
            tipo: "ok",
            comandook: ()=>{},
            comandosim: ()=>{},
            comandonao: ()=>{}
        }
        Cxmsg.mostrar(config)
        return;
    }

    qtdeatual+= qtdeadd;

    f_qtdeprodmov.value= qtdeatual;
    f_qtdeprodregmov.value= "0;"
})

btn_removeqtde.addEventListener('click', (evt)=>{
    let qtdeatual = parseInt(f_qtdeprodmov.value) || 0; // Valor padrão 0 se estiver vazio
    let qtderem = parseInt(f_qtdeprodregmov.value) || 0; // Valor padrão 0 se estiver vazio

    // Verifica se a quantidade a remover é negativa
    if (qtderem < 0) {
        const config = {
            titulo: "Alerta",
            texto: "A quantidade a remover não pode ser negativa.",
            cor: "blue",
            tipo: "ok",
            comandook: () => {},
            comandosim: () => {},
            comandonao: () => {}
        };
        Cxmsg.mostrar(config);
        return;
    }

    // Verifica se a quantidade a remover é maior que a quantidade atual
    if (qtderem <= qtdeatual) {
        qtdeatual -= qtderem;
        f_qtdeprodmov.value = qtdeatual;
    } else {
        const config = {
            titulo: "Alerta",
            texto: "Quantidade a retirar maior do que a quantidade atual.",
            cor: "blue",
            tipo: "ok",
            comandook: () => {},
            comandosim: () => {},
            comandonao: () => {}
        };
        Cxmsg.mostrar(config);
        return;
    }

    // Reseta o campo de quantidade a remover
    f_qtdeprodregmov.value = "0";
})



btn_gravar.addEventListener('click', (evt) => {

    if (!f_codprod.value || !f_tipoprod.value || !f_descprod.value || !f_fornprod.value || !f_qtdeprod.value || !f_statusprod.value) {
        alert('Por favor, preencha todos os campos antes de salvar.');
        return;
    }

        const dados = {
            n_cod_produto: f_codprod.value,
            n_tipoProduto_tipoProduto: f_tipoprod.value,
            s_desc_produto: f_descprod.value,
            n_fornecedor_fornecedor: f_fornprod.value,
            n_qtde_produto: f_qtdeprod.value, // Envia todos os números
            c_status_produto: f_statusprod.value
        }; 

        const cab = {
            method: 'post',
            body: JSON.stringify(dados)
        };

        let endpointnovoeditarcolab = null;
        if (modojanela == 'n') {
            endpointnovoeditarcolab = `${serv}novoprod`;
        } else {
            endpointnovoeditarcolab = `${serv}editarprod`;
        }

        fetch(endpointnovoeditarcolab, cab)
            .then(res => {
                if (res.status === 200) {
                    alert(modojanela === 'n' ? 'Produto adicionado com sucesso' : 'Produto editado com sucesso');

                    f_codprod.value= '';
                    f_descprod.value= '';
                    f_qtdeprod.value= '1';
                    f_tipoprod.value= '-1';
                    f_fornprod.value= '-1';
                    f_statusprod.value= 'A';
                    carregarTodosProds();
                } else {

                    const config={
                        titulo: "ERRO",
                        texto: "Erro ao gravar novo produto",
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
});



btn_add.addEventListener('click', (evt)=>{
    modojanela= 'n';
    novoProduto.classList.remove('ocultarPopup')
    document.getElementById('tituloPopup').textContent= 'Novo Produto';

    f_codprod.value= '';
    f_descprod.value= '';
    f_qtdeprod.value= '-1';
    f_fornprod.value= '-1';
    f_statusprod.value= 'A';
    listaTiposProd();
    listaFornProd();
  
})

btn_fechar.addEventListener('click', (evt)=>{
    novoProduto.classList.add('ocultarPopup')
    
})

btn_cancelar.addEventListener('click', (evt)=>{
    novoProduto.classList.add('ocultarPopup')
})

// 

// 



