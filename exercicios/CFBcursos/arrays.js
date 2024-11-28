const res = document.getElementById('resultado')

let cores = ["azul", "verde", "vermelho"]
let cursos = ["HTML", "CSS", "Javascript", cores] // 2 arrays juntos tornam-se uma MATRIZ

console.log(cursos[3][1]) // o primeiro indice é o do CURSOS,o segundo é a posiçao do elemento em CORES

cursos.push("python") // adiciona elemento no FINAL DO array

cursos.unshift("c++") // adiciona elemento no INICIO DO array

cursos.shift() // retira  O PRIMEIRO elemento do array  

cursos.pop() // retira  O ULTIMO elemento do array

cursos.map((el)=>{
    let resposta = document.createElement("p")
    resposta.innerHTML = el
    res.appendChild(resposta)
})