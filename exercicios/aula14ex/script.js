function contagem() {
    var tn1 = document.getElementById('xinicio')
    var tn2 = document.getElementById('xfim')
    var tn3 = document.getElementById('xpasso')
    
    var res = document.getElementById('resultado')
    if (tn1.value.length == 0 || tn2.value.length == 0 || tn3.value.length == 0) {
        window.alert('erro, será atribuido o número 1')
        res.innerHTML = 'impossivel contar'
    } else {
        var inicio = Number(tn1.value)
        var fim = Number(tn2.value)
        var passo = Number(tn3.value)
        res.innerHTML= 'contando'

        if(inicio < fim) {
            for(var c = inicio; c <= fim; c += passo) {
             res.innerHTML += `${c} \u{1FAE0}	`
    }
    } else {
    for(var c = inicio; c >= fim; c -= passo) {
        res.innerHTML += `${c} \u{1FAE0}`
    }
    }
    }
    }



