const data= new Date()

const div_data= document.getElementById("div_data")

const div_relogio= document.getElementById("div_relogio")

const btn_ativar= document.getElementById("btn_ativar")

const btn_parar= document.getElementById("btn_parar")

const tmp_alarme= document.getElementById("tmp_alarme")

const hora_alarme= document.getElementById("hora_alarme")

const timer= document.getElementById("timer")


const som_alarme= new Audio("alarme.mp3.mp3")
som_alarme.loop= -1


let ts_atual= null
let ts_alarme= null
let alarme_ativado= false
let alarme_tocando= false

btn_ativar.addEventListener("click", ()=>{
    ts_atual= Date.now()

    ts_alarme= ts_atual+(tmp_alarme.value*1000)

    alarme_ativado= true

    const dt_alarme= new Date(ts_alarme)

    const d_hora= dt_alarme.getHours()<10?"0"+dt_alarme.getHours():dt_alarme.getHours()

    const d_minutos= dt_alarme.getMinutes()<10?"0"+dt_alarme.getMinutes():dt_alarme.getMinutes()

    const d_segundos= dt_alarme.getSeconds()<10?"0"+dt_alarme.getSeconds():dt_alarme.getSeconds()

    hora_alarme.innerHTML=`Hora do alarme: ${d_hora}:${d_minutos}:${d_segundos}`
})

btn_parar.addEventListener("click", ()=>{
    alarme_ativado= false
    alarme_tocando= false

    hora_alarme.innerHTML="hora do alarme:"
    tmp_alarme.value=0

    timer.classList.remove("alarme")

    som_alarme.pause();
    som_alarme.currentTime=0;

    
})




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

    if(alarme_ativado && !alarme_tocando){
        if(data.getTime()>= ts_alarme){
            alarme_tocando= true
            som_alarme.play()
            timer.classList.add("alarme")
        }
    }
}

const intervalo= setInterval(relogio, 1000)
