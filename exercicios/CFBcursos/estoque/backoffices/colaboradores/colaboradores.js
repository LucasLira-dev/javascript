const dadosGrid= document.getElementById('dadosGrid');
const btn_add= document.getElementById('btn_add');
const novoColaborador= document.getElementById('novoColaborador');
const btn_fechar= document.getElementById('btn_fechar');
const btn_gravar= document.getElementById('btn_gravar');
const btn_cancelar= document.getElementById('btn_cancelar');
const f_tipoColab= document.getElementById('f_tipoColab');
const telefones= document.getElementById('telefones');
const f_telefone= document.getElementById('f_telefone');
//const btn_delTel= document.getElementById('btn_delTel'); //



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
    novoColaborador.classList.add('ocultarPopup')
})

f_telefone.addEventListener('keyup', (evt)=>{
    if(evt.key==="Enter" && evt.target.value.trim()!==''){
        const divTel= document.createElement('div');
        divTel.setAttribute('class', 'tel');
        const divNumTel= document.createElement('div');
        divNumTel.setAttribute('class', 'numTel');
        divNumTel.textContent= evt.target.value;
        const Lixeira= document.createElement('img');
        Lixeira.setAttribute('src', '../../imgs/deletar.svg');
        Lixeira.setAttribute('class', 'delTel');
        Lixeira.addEventListener('click', (evt)=>{
            console.log(evt.target.parentElement);
            evt.target.parentElement.remove();  
        })
        divTel.appendChild(divNumTel);
        divTel.appendChild(Lixeira);
        telefones.appendChild(divTel);
        evt.target.value= '';
    }
})

