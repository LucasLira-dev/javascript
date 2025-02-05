import {Login} from "./login.js" ;
import {Cxmsg} from "../CaixadeMsg/cxmsg.js" ;



const callback_ok=()=>{
 
}
const callback_naook=()=>{
    const config={
        cor: "#800",
        tipo:"Ok",
        textos: null
    }
    Cxmsg.mostrar(config, "Erro de Login", "Usuário ou senha inválidos");
}


Login.login(callback_ok, callback_naook);