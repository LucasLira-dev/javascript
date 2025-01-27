const perguntas = [
    {
        pergunta: "Qual é a capital da França?",
        alternativas: [
           { texto:"Paris", correta: true} ,
           { texto:"Londres", correta: false},
            {texto:"Berlim", correta: false},
            {texto: "Madrid", correta: false}] 
    },
    {
        pergunta: "Qual é a capital da Alemanha?",
        alternativas: ["Paris", "Londres", "Berlim", "Madrid"]
    },
    // Adicione mais perguntas aqui
];


let indiceAtual = 0;

function exibirPergunta() {
    const perguntaElemento = document.getElementById('pergunta');
    const alternativasElemento = document.getElementById('alternativas');

    const p_acertos= document.getElementById('acertos');
    let acertos=null

    // Limpa as alternativas anteriores
    alternativasElemento.innerHTML = '';

    // Exibe a pergunta atual
    perguntaElemento.textContent = perguntas[indiceAtual].pergunta;

    // Exibe as alternativas
    perguntas[indiceAtual].alternativas.forEach(alternativa => {
        const btn = document.createElement('button');
        btn.setAttribute('class','resp')
        btn.textContent = alternativa.texto;
        alternativasElemento.appendChild(btn);

        btn.addEventListener('click', () => {
            if (alternativa.correta) {
              acertos+= 5
              btn.classList.add('respAcerto')
              p_acertos.textContent= acertos
            } else {
                acertos+= 0
                btn.classList.add('respErro')
                p_acertos.textContent= acertos
                console.log(acertos)
            }

            setTimeout(() => {
                // Incrementa o índice para a próxima pergunta
                indiceAtual++;
                if (indiceAtual < perguntas.length) {
                    exibirPergunta();
                } else {
                   alert(`Pontuação final: ${acertos}`)
                    // Reinicia o quiz ou exibe uma mensagem de conclusão
                    indiceAtual = 0;
                    exibirPergunta();
                }
            }, 2000); // Atraso de 1 segundo (1000 milissegundos)
    
    });

})
}



document.getElementById('proxima').addEventListener('click', () => {
    // Avança para a próxima pergunta
    indiceAtual++;
    if (indiceAtual < perguntas.length) {
        exibirPergunta();
    } else {
         p_acertos.textContent= `Pontuação final: ${acertos}`
        // Reinicia o quiz ou exibe uma mensagem de conclusão
        indiceAtual = 0;
        exibirPergunta();
    }
});

document.addEventListener('DOMContentLoaded', exibirPergunta);