const btn_menuPrincipal= document.querySelector('.btn_menuPrincipal');
const menuPrincipal= document.getElementById('menuPrincipal');
const todososmenusprincipais= [...document.querySelectorAll('.btn_menuItem')];


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


