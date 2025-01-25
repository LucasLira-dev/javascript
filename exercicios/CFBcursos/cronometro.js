// Seleciona o elemento do cronômetro pelo ID "timer"
const timer = document.getElementById("timer");

// Seleciona os botões pelo ID
const btn_iniciar = document.getElementById("btn_iniciar");
const btn_parar = document.getElementById("btn_parar");
const btn_zerar = document.getElementById("btn_zerar");
const btn_parcial= document.getElementById("btn_parcial");

const parciaisregistradas= document.getElementById("parciaisregistradas")

// Variáveis para armazenar o tempo inicial e o intervalo do cronômetro
let tmpini = null;
let intervalo = null;

// Função que atualiza o cronômetro
const contador = () => {
    // Obtém o tempo atual
    const tmpatual = Date.now();

    // Calcula a diferença entre o tempo atual e o tempo inicial em milissegundos e segundos
    let cont = tmpatual - tmpini;
    let seg = (tmpatual - tmpini) / 1000;

    // Atualiza o conteúdo do elemento "timer" com o tempo formatado
    timer.innerHTML = converter(seg);
}

// Função que converte segundos em formato HH:MM:SS
const converter = (seg) => {
    // Calcula horas, minutos e segundos
    let hora = Math.floor(seg / 3600);
    let resto = seg % 3600;

    let minuto = Math.floor(resto / 60);
    let segundo = Math.floor(resto % 60);

    // Formata o tempo como HH:MM:SS
    const tempoFormatado = (hora < 10 ? "0" + hora : hora) + ":" +
                           (minuto < 10 ? "0" + minuto : minuto) + ":" +
                           (segundo < 10 ? "0" + segundo : segundo);
    
    return tempoFormatado;
}

// Evento para iniciar o cronômetro
btn_iniciar.addEventListener("click", () => {
    // Define o intervalo para atualizar o cronômetro a cada segundo
    intervalo = setInterval(contador, 1000);
    // Define o tempo inicial como o momento em que o botão foi clicado
    tmpini = Date.now();
});

// Evento para parar o cronômetro
btn_parar.addEventListener("click", () => {
    // Limpa o intervalo, parando o cronômetro
    clearInterval(intervalo);
});

// Evento para zerar o cronômetro
btn_zerar.addEventListener("click", () => {
    // Define o tempo inicial como o momento atual
    tmpini = Date.now();
    // Atualiza o conteúdo do elemento "timer" para "00:00:00"
    timer.innerHTML = "00:00:00";
    // Limpa o intervalo, parando o cronômetro
    clearInterval(intervalo);

    parciaisregistradas.innerHTML= ""
});

btn_parcial.addEventListener("click", (evt)=>{
    let parcial= timer.innerHTML
    let div= document.createElement("div")
    div.setAttribute("class", "divParcial")
    parciaisregistradas.innerHTML+= parcial
    parciaisregistradas.appendChild(div)
})




