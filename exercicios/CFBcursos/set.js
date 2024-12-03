const caixa = document.getElementById("caixa")

let musicas =new Set(["musica1","musica boa","musica legal", "musica3"])

musicas.delete('musica3')

for(let m of musicas){
    let p = document.createElement('p')
    p.innerHTML = m
    caixa.appendChild(p)
    
}

console.log(musicas)