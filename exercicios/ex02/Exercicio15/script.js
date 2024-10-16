function verificar() {
  var data = new Date() 
  var ano = data.getFullYear() 
  var fano = document.getElementById('txtano')  
  var res = document.getElementById('res') 
  if (fano.value.length ==0 || fano.value > ano) {
    window.alert('[ERRO] verifique os dados e tente novamente')  
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.getElementById('foto')
    if (fsex[0].checked) {
        genero = 'homem'
        if (idade >= 0 && idade < 10) {
            img.src = "menino.jpg"
        } else if ( idade < 21) {
            img.src = "homemjovem.jpg"
        } else if (idade < 50) {
            img.src = "homemadulto.jpg"
        } else {
            img.src = "homemvelho.jpg"
        }
    } else if (fsex[1].checked) {
        genero = 'mulher'
        if (idade >= 0 && idade < 10) {
            img.src = "menina.jpg"
        } else if ( idade < 21) {
            img.src = "mulherjovem.jpg"
        } else if (idade < 50) {
            img.src = "mulheradulta.jpg"
        } else {
            img.src = "velha.jpg"
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `detectamos ${genero}  com  ${idade} anos `
    res.appendChild(img)
  }
  
}