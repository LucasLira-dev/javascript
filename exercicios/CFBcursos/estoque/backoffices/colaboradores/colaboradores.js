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




const endpoint_todoscolaboradores= `http://127.0.0.1:1880/todosusuarios`;
fetch(endpoint_todoscolaboradores)
.then(res=> res.json())
.then(res=>{
    console.log(res);
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

        const img_status= document.createElement('img');
        img_status.setAttribute('src', '../../imgs/on.svg');
        img_status.setAttribute('class', 'img_on iconeop');
        divc5.appendChild(img_status);

        const img_editar= document.createElement('img');
        img_editar.setAttribute('src', '../../imgs/editar.svg');
        img_editar.setAttribute('class', 'img_editar iconeop');
        divc5.appendChild(img_editar);

        const img_excluir= document.createElement('img');
        img_excluir.setAttribute('src', '../../imgs/deletar.svg');
        img_excluir.setAttribute('class', 'img_excluir iconeop');
        divc5.appendChild(img_excluir);

        dadosGrid.appendChild(linhaGrid);
    })
});

const endpoint_tiposColab= `http://127.0.0.1:1880/tiposcolab`;
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
    novoColaborador.classList.remove('ocultarPopup')
})

btn_fechar.addEventListener('click', (evt)=>{
    novoColaborador.classList.add('ocultarPopup')
})

btn_cancelar.addEventListener('click', (evt)=>{
    novoColaborador.classList.add('ocultarPopup')
})

btn_gravar.addEventListener('click', (evt)=>{
    if(f_nome.value.trim()==='' && telefones.children.length===0){
        alert('Informe o nome do colaborador e pelo menos um telefone');  
    } else{

        const tels= [...document.querySelectorAll('.numTel')];
        let numTels= [];
        tels.forEach(item=>{
            numTels.push(item.textContent
            );
        }) 

        const dados= {
            s_nome_usuario: f_nome.value,
            n_tipousuario_tipousuario: f_tipoColab.value,
            c_status_usuario: f_status.value,
            numtelefones: numTels,
            s_foto_usuario: img_foto.getAttribute('src')
        }
    
        const cab={
            method: 'post',
            body: JSON.stringify(dados)
        }
    
       const endpointnovocolab= `http://127.0.0.1:1880/novocolab`
        fetch(endpointnovocolab, cab)
        .then(res=>{
            if (res.status === 200) {
                alert('Colaborador cadastrado com sucesso');

                f_nome.value= '';
                f_tipoColab.value= '';
                f_status.value= '';
                img_foto.src= '';
                telefones.innerHTML= '';

            } else {
                alert('Erro ao cadastrar colaborador');
            }
        })
        .catch(err => {
            console.error('Erro na requisição:', err);
        })
            
     
}
 
    novoColaborador.classList.add('ocultarPopup')
})


f_telefone.addEventListener('keyup', (evt)=>{
    if(evt.key==="Enter" && evt.target.value.trim()!=='' && evt.target.value.length>=8 && evt.target.value.length<=11){
        const divTel= document.createElement('div');
        divTel.setAttribute('class', 'tel');
        const divNumTel= document.createElement('div');
        divNumTel.setAttribute('class', 'numTel'); 
        divNumTel.textContent= evt.target.value;
        const Lixeira= document.createElement('img');
        Lixeira.setAttribute('src', '../../imgs/deletar.svg');
        Lixeira.setAttribute('class', 'delTel');
        Lixeira.addEventListener('click', (evt)=>{
            evt.target.parentElement.remove();  
        })
        divTel.appendChild(divNumTel);
        divTel.appendChild(Lixeira);
        telefones.appendChild(divTel);
        evt.target.value= '';
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

