
const configDgv = {
    endpoint: "produto.json",
    idDestino: "dgvDados"
};

const datagridview = (configDgv) => {
    const dgvDados = document.getElementById(configDgv.idDestino);
    dgvDados.innerHTML = ""; // Limpa o conteúdo do dgvDados

    fetch(configDgv.endpoint)
        .then(res => res.json())
        .then(res => {
            res.forEach(el => {
                const dgvLinha = document.createElement("div");
                dgvLinha.setAttribute("class", "dgvLinha");
                dgvLinha.setAttribute("data-id", el.id); // Adiciona um identificador único à linha

                const c1 = document.createElement("div");
                c1.setAttribute("class", "coluna c1");
                c1.innerHTML = el.id;
                dgvLinha.appendChild(c1);

                const c2 = document.createElement("div");
                c2.setAttribute("class", "coluna c2");
                c2.innerHTML = el.produto;
                dgvLinha.appendChild(c2);

                const c3 = document.createElement("div");
                c3.setAttribute("class", "coluna c3");
                c3.innerHTML = el.marca;
                dgvLinha.appendChild(c3);

                const c4 = document.createElement("div");
                c4.setAttribute("class", "coluna c4");
                c4.innerHTML = el.modelo;
                dgvLinha.appendChild(c4);

                const c5 = document.createElement("div");
                c5.setAttribute("class", "coluna c5");
                dgvLinha.appendChild(c5);

                const imgDelete = document.createElement("img");
                imgDelete.setAttribute("src", "lxeira.svg");
                imgDelete.setAttribute("class", "dgvIcons");
                c5.appendChild(imgDelete);
                imgDelete.addEventListener("click", () => {
                    dgvLinha.remove(); // Remove a linha da UI
                });

                const imgEdit = document.createElement("img");
                imgEdit.setAttribute("src", "editar.svg");
                imgEdit.setAttribute("class", "dgvIcons");
                c5.appendChild(imgEdit);

                imgEdit.addEventListener("click", () => {
                    // Exibe a janela de edição
                    document.querySelector(".janelaEditar").classList.remove("ocultar");

                    // Preenche os campos do formulário com os dados atuais
                    document.getElementById("f_Ideditar").value = el.id;
                    document.getElementById("f_produtoeditar").value = el.produto;
                    document.getElementById("f_marcaeditar").value = el.marca;
                    document.getElementById("f_modeloeditar").value = el.modelo;

                    // Configura o evento de gravação
                    const btn_gravar = document.getElementById("btn_gravar");
                    const handleGravar = () => {
                        // Atualiza o objeto `el` com os novos valores
                        el.produto = document.getElementById("f_produtoeditar").value;
                        el.marca = document.getElementById("f_marcaeditar").value;
                        el.modelo = document.getElementById("f_modeloeditar").value;

                        // Atualiza a UI diretamente
                        const linha = dgvDados.querySelector(`[data-id="${el.id}"]`);
                        if (linha) {
                            linha.querySelector(".c2").innerHTML = el.produto;
                            linha.querySelector(".c3").innerHTML = el.marca;
                            linha.querySelector(".c4").innerHTML = el.modelo;
                        }

                        // Fecha a janela de edição
                        document.querySelector(".janelaEditar").classList.add("ocultar");

                        // Remove o listener para evitar duplicação
                        btn_gravar.removeEventListener("click", handleGravar);
                    };

                    btn_gravar.addEventListener("click", handleGravar);
                });

                const imgView = document.createElement("img");
                imgView.setAttribute("src", "visualizar.svg");
                imgView.setAttribute("class", "dgvIcons");
                c5.appendChild(imgView);
                imgView.addEventListener("click", () => {
                    // Exibe a janela de visualização
                    document.querySelector(".janelaView").classList.remove("ocultar");

                    // Preenche os campos do formulário com os dados atuais
                    document.getElementById("f_Id").value = el.id;
                    document.getElementById("f_produto").value = el.produto;
                    document.getElementById("f_marca").value = el.marca;
                    document.getElementById("f_modelo").value = el.modelo;

                    // Fecha a janela de visualização ao clicar em "OK"
                    const btn_ok = document.getElementById("btn_ok");
                    btn_ok.addEventListener("click", () => {
                        document.querySelector(".janelaView").classList.add("ocultar");
                    });
                });

                dgvDados.appendChild(dgvLinha);
            });
        });
};

datagridview(configDgv);
