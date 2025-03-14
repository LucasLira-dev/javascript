class Cxmsg{

    static config= null

    // static config={
    //     titulo: "",
    //     texto: "",
    //     cor: "",
    //     comandook: null,
    //     comandosim: null,
    //     comandonao: null
    // }
    
    static mostrar=(config)=>{
        this.config=config
        alert(this.config.texto)
    }
}


export {Cxmsg}


// <div id="cxmsg_fundo" class="cxmsg_fundo ocultarPopup">
// <div  id="cxmsg" class="cxmsg">
//      <div id="titulo_cxmsg" class="titulo_cxmsg"> 
//         <p>titulo</p> 
//         <img src="../imgs/fechar.svg" alt="" id="btn_fechar_cxmsg" class="btn_fechar_cxmsg"> 
//      </div>

//      <div id="corpo_cxmsg" class="corpo_cxmsg">
//           <p>mensagem</p>
//      </div>

//      <div id="rodape_cxmsg" class="rodape_cxmsg"> 
//           <button id="btn_ok_cxmsg" class="btn_cxmsg"> OK </button> 
//           <button id="btn_sim_cxmsg" class="btn_cxmsg"> SIM </button>
//           <button id="btn_nao_cxmsg" class="btn_cxmsg"> NÃO </button>
//      </div>
// </div>
// </div>



//estilo

// <style>
// .cxmsg_fundo{
//      position: fixed;
//      top: 0;
//      left: 0;
//      width: 100%;
//      height: 100vh;
//      display: flex;
//      justify-content: center;
//      align-items: center;
//      background-color: rgba(0, 0, 0, 0.75);
// }

// .cxmsg{
//      width: 300px;
// }

// .titulo_cxmsg{
//      display: flex;
//      justify-content: space-between;
//      align-items: center;
//      background-color: #00f;
//      color: #fff;
//      border-radius: 10px 10px 0px 0px;
//      padding: 5px;
// }

// .corpo_cxmsg{
//      display: flex;
//      justify-content: flex-start;
//      align-items: center;
//      background-color: #aaa;
//      color: #000;
//      padding: 5px;

// }

// .rodape_cxmsg{
//      display: flex;
//      justify-content: space-around;
//      align-items: center;
//      padding: 5px;
//      background-color: #008;
//      border-radius: 0px 0px 10px 10px;
// }

// .btn_fechar_cxmsg{
//      background-color: #f00;
//      width: 20px;
//      cursor: pointer;
//      border-radius: 5px;
// }

// .btn_cxmsg{
//      cursor: pointer;
//      padding: 5px;
//      border-radius: 5px;
//      border: none;
//      color: rgb(37, 33, 33);
//      background-color: #aaa;
//      width: 50px;
// }

// </style>