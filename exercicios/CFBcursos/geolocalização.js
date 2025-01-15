const lati= document.getElementById("lati")
const long= document.getElementById("long")

navigator.geolocation.getCurrentPosition(mostrarLocalizacao, erroLocalizacao)

function mostrarLocalizacao(pos){
    lati.innerHTML= `latitude: ${pos.coords.latitude}`
    long.innerHTML= `longitude: ${pos.coords.longitude}`
}

function erroLocalizacao(pos){
    console.log("a localização não foi disponibilizada")
}

