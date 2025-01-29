import {Cxmsg} from './cxmsg.js'

const config={
  
    cor: "#48f",
    tipo: "sn",
    textos: ["SIM", "NÃO"],
    comando_sn: ()=>{}
}

const fsim=()=>{
    console.log("SIM")
}

const btn_mostrarcxmsg= document.getElementById('btn_mostrarcxmsg')
const btn_mostrarcxmsg2= document.getElementById('btn_mostrarcxmsg2')
const btn_mostrarcxmsg3= document.getElementById('btn_mostrarcxmsg3')



btn_mostrarcxmsg.addEventListener('click',()=>{
    config.tipo= "Ok"
    Cxmsg.mostrar(config, "oi", "tudo bem?")
})

btn_mostrarcxmsg2.addEventListener('click',()=>{
    config.tipo= "sn"
    config.textos=["SIM", "NÃO"]
    config.comando_sn=()=>{fsim()}
    Cxmsg.mostrar(config, "oi", "tudo bem?")
})

btn_mostrarcxmsg3.addEventListener('click',()=>{
    config.tipo= "sn"
    config.textos=["OK", "CANCELAR"]
    Cxmsg.mostrar(config, "oi", "tuopasiisido bem?")
})

