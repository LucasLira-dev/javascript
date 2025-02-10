

const configDgv={
   endpoint:"produto.json",
   idDestino:"dgvDados"
}

const datagridview=(configDgv)=>{
    const dgvDados= document.getElementById(configDgv.idDestino);
    dgvDados.innerHTML=""; //limpa o conteudo do dgvDados
    fetch(configDgv.endpoint)
    .then(res => res.json())
    .then(res => {

        const btn_ok= document.getElementById("btn_ok");


       res.forEach(el=>{
        const dgvLinha= document.createElement("div"); 
        dgvLinha.setAttribute("class", "dgvLinha");

        const c1= document.createElement("div");
        c1.setAttribute("class", "coluna c1");
        c1.innerHTML= el.id;
        dgvLinha.appendChild(c1);

        const c2= document.createElement("div");
        c2.setAttribute("class", "coluna c2");
        c2.innerHTML= el.produto;
        dgvLinha.appendChild(c2);

        const c3= document.createElement("div");
        c3.setAttribute("class", "coluna c3");
        c3.innerHTML= el.marca;
        dgvLinha.appendChild(c3);

        const c4= document.createElement("div");
        c4.setAttribute("class", "coluna c4");
        c4.innerHTML= el.modelo;
        dgvLinha.appendChild(c4);

        const c5= document.createElement("div");
        c5.setAttribute("class", "coluna c5");
        dgvLinha.appendChild(c5);

        const imgDelete= document.createElement("img");
        imgDelete.setAttribute("src", "lxeira.svg");
        imgDelete.setAttribute("class", "dgvIcons");
        c5.appendChild(imgDelete);
        imgDelete.addEventListener("click", ()=>{
            dgvLinha.remove();
        })

        const imgEdit= document.createElement("img");
        imgEdit.setAttribute("src", "editar.svg");
        imgEdit.setAttribute("class", "dgvIcons");
        c5.appendChild(imgEdit);
        

        const imgView= document.createElement("img");
        imgView.setAttribute("src", "visualizar.svg");
        imgView.setAttribute("class", "dgvIcons");
        c5.appendChild(imgView);
        imgView.addEventListener("click", ()=>{
            
            document.querySelector(".janelaView").classList.remove("ocultar"); //exibe a janelaView
          

            const f_id= document.getElementById("f_Id");
            const f_produto= document.getElementById("f_produto");
            const f_marca= document.getElementById("f_marca");
            const f_modelo= document.getElementById("f_modelo");

            f_id.value= el.id;
            f_produto.value= el.produto;
            f_marca.value= el.marca;
            f_modelo.value= el.modelo; //preenche os campos do formulario com os dados do 
            
            btn_ok.addEventListener("click", ()=>{
                document.querySelector(".janelaView").classList.add("ocultar"); //fecha a janelaView
            })
        }) 
     

        dgvDados.appendChild(dgvLinha);

       })
    })
} 

datagridview(configDgv);

