class Login{

    static logado= false;
    static matlogado= null;
    static nomelogado= null;
    static acessologado= null;
    static estiloCss= null;
    static endpoint= "http://localhost:8000" ;
    static config={
        cor: "#008",
        img: "../headerReaproveitavel/download.jpg"
    }
    

    static login=(config=null)=>{
        if(config!=null){
            this.config= config;
        }
    

        this.estiloCss=  `*{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        .fundoLogin {
            background-color: rgba(0,0,0, 0.75);
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 0px;
            left: 0px;
            box-sizing: border-box;
        }

        .baseLogin {
            display: flex;
            justify-content: flex-start;
            align-items: stretch;
            width: 50%;
        }

        .elementosLogin {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-direction: column;
            padding: 10px;
            width: 50%;
            border-radius: 10px 0px 0px 10px;
            background-color: #eee;
        }

        .logoLogin {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50%;
            background-color: white;
            padding: 10px;
            border-radius: 0px 10px 10px 0px;
        }

        .logoLogin img {
            width: 90%;
        }

        .campoLogin {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;
            margin-bottom: 10px;
        }

        .campoLogin label {
            font-size: 18px;
        }

        .campoLogin input {
            padding: 5px;
            background-color: #eee;
            border-radius: 5px;
            width: 90%;
        }

        .botoeslogin {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 100%;
        }

        .botoesLogin button {
            cursor: pointer;
            background-color: ${this.config.cor};
            color: white;
            border-radius: 5px;
            padding: 10px;
            margin: 5px;
            width: 100px;
        }
    `;

    const styleEstilo= document.createElement("style");
    styleEstilo.setAttribute("id", "id_estiloLogin")
    styleEstilo.setAttribute("rel", "stylesheet");
    styleEstilo.setAttribute("type", "text/css");
    styleEstilo.innerHTML= this.estiloCss;
    document.head.appendChild(styleEstilo);

    const corpo= document.body;

    const fundoLogin= document.createElement("div");
    fundoLogin.setAttribute("id", "fundoLogin");
    fundoLogin.setAttribute("class", "fundoLogin");
    document.body.prepend(fundoLogin);
    
    const baseLogin= document.createElement("div");
    baseLogin.setAttribute("id", "baseLogin");
    baseLogin.setAttribute("class", "baseLogin");
    fundoLogin.appendChild(baseLogin);

    const elementosLogin= document.createElement("div");
    elementosLogin.setAttribute("id", "elementosLogin");
    elementosLogin.setAttribute("class", "elementosLogin");
    baseLogin.appendChild(elementosLogin);

    const campoLoginUsername= document.createElement("div");
    campoLoginUsername.setAttribute("id", "campoLoginUsername");
    campoLoginUsername.setAttribute("class", "campoLogin");
    elementosLogin.appendChild(campoLoginUsername);

    const labelUsername= document.createElement("label");
    labelUsername.innerHTML= "Username";
    campoLoginUsername.appendChild(labelUsername);

    const inputUsername= document.createElement("input");
    inputUsername.setAttribute("type", "text");
    inputUsername.setAttribute("name", "f_username");
    inputUsername.setAttribute("id", "f_username");
    campoLoginUsername.appendChild(inputUsername); 

    const campoLoginSenha= document.createElement("div");
    campoLoginSenha.setAttribute("id", "campoLoginSenha");
    campoLoginSenha.setAttribute("class", "campoLogin");
    elementosLogin.appendChild(campoLoginSenha);

    const labelSenha= document.createElement("label");
    labelSenha.innerHTML= "Senha";
    campoLoginSenha.appendChild(labelSenha);

    const inputSenha= document.createElement("input");
    inputSenha.setAttribute("type", "password");
    inputSenha.setAttribute("name", "f_senha");
    inputSenha.setAttribute("id", "f_senha");
    campoLoginSenha.appendChild(inputSenha); 


    // botoes
    const botoesLogin= document.createElement("div");
    botoesLogin.setAttribute("class", "botoesLogin");
    elementosLogin.appendChild(botoesLogin);

    const btnLogin= document.createElement("button");
    btnLogin.setAttribute("id", "btn_login");
    btnLogin.innerHTML= "Login";
    btnLogin.addEventListener("click", (evt)=>{
        this.verificaLogin()
    }); // verifica se o login é válido
    botoesLogin.appendChild(btnLogin);

    const btnCancelar= document.createElement("button");
    btnCancelar.setAttribute("id", "btn_cancelar");
    btnCancelar.innerHTML= "Cancelar";
    btnCancelar.addEventListener("click", (evt)=>{
        this.fechar();
    }); // fecha a tela de login quando clicar no botão cancelar
    botoesLogin.appendChild(btnCancelar);



    // logo-login
    const logoLogin= document.createElement("div");
    logoLogin.setAttribute("id", "logoLogin");
    logoLogin.setAttribute("class", "logoLogin");
    baseLogin.appendChild(logoLogin);

    const imgLogo= document.createElement("img");
    imgLogo.setAttribute("src", this.config.img);
    imgLogo.setAttribute("alt", "");
    logoLogin.appendChild(imgLogo);



       
    }


    static verificaLogin=()=>{
        const mat= document.getElementById("f_username").value;
        const pas= document.getElementById("f_senha").value;
 
        const endpoint= `http://localhost:8000?matricula=${mat}&senha=${pas}`;
        fetch(endpoint)
        .then(res=>res.json())
        .then(res=>{
             if(res.nome && res.acesso){ 
               
                this.logado= true;
                this.matlogado= mat;
                this.nomelogado= res.nome;
                this.acessologado= res.acesso;
                this.fechar();
            } else{
                this.logado= false;
                this.matlogado= null;
                this.nomelogado= null;
                this.acessologado= null;
                alert("Credenciais inválidas");
           } 
        })

       
    } // verifica se o login é válido

    static fechar =()=>{
        document.getElementById("fundoLogin").remove();
        document.getElementById("id_estiloLogin").remove();
    } // fecha a tela de login

}

export {Login}



