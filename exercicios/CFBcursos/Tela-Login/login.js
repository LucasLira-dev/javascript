class Login{

    static logado= false;
    static matlogado= null;
    static nomelogado= null;
    static acessologado= null;
    static estiloCss= null;
    static endpoint= "http://localhost:8000" ;
    

    static login=(mat, pas)=>{
        this.endpoint+= `?matricula=${mat}&senha=${pas}`;
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
            background-color: #008;
            color: white;
            border-radius: 5px;
            padding: 10px;
            width: 100px;
        }
    `;

    const styleEstilo= document.createElement("style");
    styleEstilo.setAttribute("id", "id_estiloLogin")
    styleEstilo.setAttribute("rel", "stylesheet");
    styleEstilo.setAttribute("type", "text/css");
    styleEstilo.innerHTML= this.estiloCss;
    document.head.appendChild(styleEstilo);
        fetch(this.endpoint)
        .then(res=>res.json())
        .then(res=>{
           if(res){
                console.log(res.acesso);
                this.logado= true;
                this.matlogado= mat;
                this.nomelogado= res.nome;
                this.acessologado= res.acesso;
           } else{
               console.log("Erro no login");
           }
        })
    }
}

export {Login}




/*var http = require('http');
var url = require('url');
http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, {'Content-Type': 'apllication/json'});

    let parametros= url.parse(req.url, true);

    let mat= parametros.query.matricula;
    let pas= parametros.query.senha;

    let dados= null;

    if(mat=="123" && pas=="321"){
        dados= {
            nome: "Bruno",
            acesso: 10
        }
    } 

    res.end(JSON.stringify(dados));
}).listen(8000); */