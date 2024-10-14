function carregar() {
var hora = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
//var hora = data.getHours()
var hora = 8
msg.innerHTML = `agora são ${hora} horas`
if (hora >= 0 && hora <= 12) {
   img.src = '../aula12/ex/modelo/manha.png.jpg'
   foto.style.background = '#41371A'
} else if (hora >= 12 && hora <= 18) {
    img.src = '../aula12/ex/modelo/tarde.png.jpg'
} else {
    img.src = '../aula12/ex/modelo/noite.png.jpg'
}
 }
