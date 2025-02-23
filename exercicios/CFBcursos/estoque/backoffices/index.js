const cabecalho= document.getElementById('cabecalho');
const menu= document.getElementById('menu');

const btn_home= document.getElementById('btn_home');
const btn_novo= document.getElementById('btn_novo');
const btn_pesquisar= document.getElementById('btn_pesquisar');
const btn_gestao= document.getElementById('btn_gestao');
const btn_sobre= document.getElementById('btn_sobre');

const principal= document.getElementById('principal');


btn_home.addEventListener('click', (evt)=>{
    window.open('home.html', 'if_principal')
    selecionarAba(evt.target)
})

btn_novo.addEventListener('click', (evt)=>{
    window.open('novo.html', 'if_principal')
    selecionarAba(evt.target)
})

btn_pesquisar.addEventListener('click', (evt)=>{
    window.open('pesquisar.html', 'if_principal')
    selecionarAba(evt.target)
})

btn_gestao.addEventListener('click', (evt)=>{
    window.open('gestao.html', 'if_principal')
    selecionarAba(evt.target)
})

btn_sobre.addEventListener('click', (evt)=>{
    window.open('sobre.html', 'if_principal')
    selecionarAba(evt.target)
})

const selecionarAba=(el)=>{
  
    const abas= [...document.querySelectorAll('.aba')];
    
    abas.forEach(aba=>{
        aba.classList.remove('abaSelecionada')
    })

    el.classList.add('abaSelecionada')

}