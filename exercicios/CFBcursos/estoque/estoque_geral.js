const btn_menuPrincipal= document.querySelector('.btn_menuPrincipal');
const menuPrincipal= document.getElementById('menuPrincipal');
const todososmenusprincipais= [...document.querySelectorAll('.btn_menuItem')];

const endponit_config= `../config.txt`;
fetch(endponit_config)
.then(res=> res.json())
.then(res=>{
    sessionStorage.setItem('servidor_nodered', res.servidor_nodered);
    sessionStorage.setItem('versao', res.versao);
})

btn_menuPrincipal.addEventListener('click', () => {
    menuPrincipal.classList.toggle('ocultar');
}); 

todososmenusprincipais.map((menu) => {
    menu.addEventListener('click', () => {
       menuPrincipal.classList.add('ocultar');
       console.log('clicou');
    })
}) 



