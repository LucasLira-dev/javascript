const data= new Date()

const div_data= document.getElementById("div_data")

const div_relogio= document.getElementById("div_relogio")



//colocando um 0 no no dia do mes caso ele seja menor que 10
const dia= data.getDate()<10?"0"+data.getDate():data.getDate()


//colocando um 0 no mes caso ele seja menor que 10
const mes= data.getMonth()<10?"0"+data.getMonth():data.getMonth()

//formatando a data
const data_r= data.getDate()+ "/"+(data.getMonth()+1)+"/"+data.getFullYear()

console.log(data_r)

div_data.innerHTML= data_r


const relogio=()=>{
    const data= new Date()
    let hora= data.getHours()
    hora= hora<10?"0"+hora:hora
    let minutos= data.getMinutes()
    minutos= minutos<10?"0"+minutos:minutos
    let segundos= data.getSeconds()

    if(segundos<10){
        segundos= "0"+segundos
    }

    div_relogio.innerHTML= `${hora}: ${minutos}: ${segundos}`
}

const intervalo= setInterval(relogio, 1000)
