const btn_menuPrincipal= document.querySelector('.btn_menuPrincipal');
const menuPrincipal= document.getElementById('menuPrincipal');
const todososmenusprincipais= document.querySelectorAll('.btn_menuItens');

btn_menuPrincipal.addEventListener('click', () => {
    menuPrincipal.classList.toggle('ocultar');
}); 



