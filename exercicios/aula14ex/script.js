function contagem() {
    var tn1 = document.getElementById('xinicio')
    var tn2 = document.getElementById('xfim')
    var tn3 = document.getElementById('xpasso')
    var inicio = Number(tn1.value)
    var fim = Number(tn2.value)
    var passo = Number(tn3.value)
    var res = document.getElementById('resultado')
    if (inicio == 0 || fim == 0 || passo == 0) {
        window.alert('erro, será atribuido o número 1')
        res.innerHTML = 'impossivel contar'
    } else {

    for(var inicio; inicio <= fim; inicio += passo) {
        res.innerHTML += `${inicio}`
    }
}
}