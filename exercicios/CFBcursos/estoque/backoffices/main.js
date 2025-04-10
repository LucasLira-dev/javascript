if(!sessionStorage.getItem('n_pessoa_pessoa')){
    window.location.href= './index.html';
}


const btn_menuPrincipal= document.querySelector('.btn_menuPrincipal');
const menuPrincipal= document.getElementById('menuPrincipal');
const todososmenusprincipais= [...document.querySelectorAll('.btn_menuItem')];

const nome= document.getElementById('nome');
const id= document.getElementById('id');

const btn_logoff= document.getElementById('btn_logoff');


btn_menuPrincipal.addEventListener('click', () => {
    menuPrincipal.classList.toggle('.ocultar');
    console.log('clicou');
}); 

todososmenusprincipais.map((menu) => {
    menu.addEventListener('click', () => {
       menuPrincipal.classList.add('ocultar');
       console.log('clicou');
    })
}) 

btn_logoff.addEventListener("click", ()=>{
    sessionStorage.clear();
    window.location.href= './index.html';
})


const n_pessoa_pessoa= sessionStorage.getItem('n_pessoa_pessoa');
const s_nome_pessoa= sessionStorage.getItem('s_nome_pessoa');

id.innerHTML= `Id: ${n_pessoa_pessoa}`;
nome.innerHTML= `Nome: ${s_nome_pessoa}`;