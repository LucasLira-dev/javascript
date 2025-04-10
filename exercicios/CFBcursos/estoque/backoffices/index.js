const f_email= document.getElementById('f_email');
const f_senha= document.getElementById('f_senha');
const btn_login= document.getElementById('btn_login');

const primeiroAcesso= document.getElementById('primeiroAcesso');

const login= document.getElementById('login');

const f_emailDefSenha= document.getElementById('f_emailDefSenha');
const f_senha1= document.getElementById('f_senha1');
const f_senha2= document.getElementById('f_senha2');
const btn_gravarNovoLogin= document.getElementById('btn_gravarNovoLogin');
const btn_fecharPopupDefSenha= document.getElementById('btn_fecharPopupDefSenha');

const criarNovaConta= document.getElementById('criarNovaConta');


sessionStorage.clear();



let serv= null;

const endponit_config= `../config.txt`;
fetch(endponit_config)
.then(res=> res.json())
.then(res=>{
    sessionStorage.setItem('servidor_nodered', res.servidor_nodered);
    sessionStorage.setItem('versao', res.versao);
    serv= res.servidor_nodered;
    
})



btn_login.addEventListener('click', (e)=>{
    e.preventDefault();
    if(serv!== null){
        const email= f_email.value;
        let senha= f_senha.value;
        if(senha==""){
            senha= "-1";
        }
        const endpoint= `${serv}login/${email}/${senha}`;
        fetch(endpoint)
        .then(res=> res.json())
        .then(res => {
            console.log(res[0])
            if (res[0].retorno === 200) { // OK
                sessionStorage.setItem('n_pessoa_pessoa', res[0].n_pessoa_pessoa);
                sessionStorage.setItem('s_nome_pessoa', res[0].s_nome_pessoa);
                window.location.href= './main.html';
            } else if (res[0].retorno === 208) { // SENHA ERRADA
               alert('Senha errada!');
            } 
             else if (res[0].retorno === 205) { // PRIMEIRO ACESSO
                login.classList.add('ocultarPopup');
                primeiroAcesso.classList.remove('ocultarPopup');
            }
        }) 
    }
   
})

btn_fecharPopupDefSenha.addEventListener('click', (e)=>{
    primeiroAcesso.classList.add('ocultarPopup');
    login.classList.remove('ocultarPopup');
})

criarNovaConta.addEventListener('click', (e)=>{
    primeiroAcesso.classList.remove('ocultarPopup');
    login.classList.add('ocultarPopup');
})

btn_gravarNovoLogin.addEventListener('click', (e)=>{
    if(f_senha1.value !== f_senha2.value){
        alert('Senhas diferentes!');
        return;
    } else if(f_senha1.value===""){
        alert('Senha não pode ser vazia!');
        return;
    }else{
        const dados = {
            email: f_emailDefSenha.value,
            senha: f_senha1.value
        };

        console.log('Dados enviados:', dados);

        const cab ={
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        }
         
        const endpoint= `${serv}primeiro_acesso`;
        fetch(endpoint, cab)
        .then(res=> res.json())
        .then(res=>{
            window.location.href= './main.html';
        })

    }
    })