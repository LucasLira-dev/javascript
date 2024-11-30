const caixa = document.getElementById("caixa")

let mapa = new Map()

mapa.set("curso", "javascript")
mapa.set("cursos", "HTML")
mapa.set("nome", "lucas")

let res= "curso"

if(mapa.has(res)){
    res= "a chave existe na coleçao" + " o tamanho da coleção é " + mapa.size
}
else{
    res= "a chave NÃO existe na coleção" + "o tamanho da coleção é " + mapa.size
}

caixa.innerHTML= res