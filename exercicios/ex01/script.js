function carregar() {
var hora = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minuto = data.getMinutes()
msg.innerHTML = `agora são ${hora} horas e ${minuto} minutos`
if (hora >= 0 && hora <= 12) {
   img.src = '../aula12/ex/modelo/manha.png.jpg'
   document.body.style.background = '#41371A'
} else if (hora >= 12 && hora <= 18) {
    img.src = '../aula12/ex/modelo/tarde.png.jpg'
    document.body.style.background = '#472B1D'
} else {
    img.src = '../aula12/ex/modelo/noite.png.jpg'
    document.body.style.background = '#183442'
}
 }
