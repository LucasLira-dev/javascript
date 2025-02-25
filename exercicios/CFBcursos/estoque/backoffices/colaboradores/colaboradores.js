const dadosGrid= document.getElementById('dadosGrid');

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