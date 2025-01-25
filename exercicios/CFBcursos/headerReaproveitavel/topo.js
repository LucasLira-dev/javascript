const head= document.head
const body= document.body

const estilo= "<link rel='stylesheet' href='topo.css'>"

head.innerHTML += estilo    

const topo= document.createElement('div')
topo.id= 'topo' // Adiciona um id ao elemento
topo.setAttribute('class', 'topo')

body.prepend(topo) // Adiciona o elemento no início do body

const logo= "<div id='logo' class='logo'>" +
                "<img src='download.jpg' alt='Logo'>" +
            "</div>" 

topo.innerHTML += logo // Adiciona o conteúdo no topo

const login= "<div id='login' class='login'>" + "<p id='matricula'> Matricula: <span> </span>  </p> " + "<p id='nome'> Nome: <span> </span>  </p> " + "</div>" 

topo.innerHTML+= login