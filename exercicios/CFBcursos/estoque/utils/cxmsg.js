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
        const cxmsg_fundo= document.createElement('div')
        cxmsg_fundo.setAttribute('class', 'cxmsg_fundo' )
        cxmsg_fundo.setAttribute('id', 'cxmsg_fundo' )

        const cxmsg= document.createElement('div')
        cxmsg.setAttribute('class', 'cxmsg' )
        cxmsg_fundo.appendChild(cxmsg)

        const titulo_cxmsg= document.createElement('div')
        titulo_cxmsg.setAttribute('class', 'titulo_cxmsg' )
        titulo_cxmsg.setAttribute('style', `background-color: ${this.config.cor} !important`)
        cxmsg.appendChild(titulo_cxmsg)

        const p_titulo= document.createElement('p')
        p_titulo.textContent= this.config.titulo    

        const img_fechar= document.createElement('img')
        img_fechar.setAttribute('src', '../../imgs/fechar.svg')
        img_fechar.setAttribute('class', 'btn_fechar_cxmsg')
        img_fechar.setAttribute('id', 'btn_fechar_cxmsg')
        img_fechar.addEventListener('click', ()=>{
            this.fechar()
        })

        titulo_cxmsg.appendChild(p_titulo)
        titulo_cxmsg.appendChild(img_fechar)

        const corpo_cxmsg= document.createElement('div')
        corpo_cxmsg.setAttribute('class', 'corpo_cxmsg' )
        cxmsg.appendChild(corpo_cxmsg)

        const p_corpo= document.createElement('p')
        p_corpo.textContent= this.config.texto
        corpo_cxmsg.appendChild(p_corpo)

        const rodape_cxmsg= document.createElement('div')
        rodape_cxmsg.setAttribute('class', 'rodape_cxmsg' )
        cxmsg.appendChild(rodape_cxmsg)

        
        if(config.tipo=="ok"){
            const btn_ok_cxmsg= document.createElement('button')
            btn_ok_cxmsg.setAttribute('class', 'btn_cxmsg' )
            btn_ok_cxmsg.setAttribute('id', 'btn_ok_cxmsg' )
            rodape_cxmsg.appendChild(btn_ok_cxmsg)
            btn_ok_cxmsg.textContent= 'OK'
            btn_ok_cxmsg.addEventListener('click', ()=>{

                config.comandook()
                this.fechar()
            })
        }else if(config.tipo=="sn"){
            const btn_sim_cxmsg= document.createElement('button')
            btn_sim_cxmsg.setAttribute('class', 'btn_cxmsg' )
            btn_sim_cxmsg.setAttribute('id', 'btn_sim_cxmsg' )
            rodape_cxmsg.appendChild(btn_sim_cxmsg)
            btn_sim_cxmsg.textContent= 'SIM'
            btn_sim_cxmsg.addEventListener('click', ()=>{
               
                config.comandosim()
                this.fechar()
            })
    
            const btn_nao_cxmsg= document.createElement('button')
            btn_nao_cxmsg.setAttribute('class', 'btn_cxmsg' )
            btn_nao_cxmsg.setAttribute('id', 'btn_nao_cxmsg' )
            rodape_cxmsg.appendChild(btn_nao_cxmsg)
            btn_nao_cxmsg.textContent= 'NÃO'
            btn_nao_cxmsg.addEventListener('click', ()=>{
                config.comandonao()
                this.fechar()
            })
        }
      
        document.body.prepend(cxmsg_fundo)
    }

    static fechar=()=>{
        const cxmsg_fundo = document.getElementById('cxmsg_fundo');
        if (cxmsg_fundo) {
            cxmsg_fundo.remove();
        }
    }
}


export {Cxmsg}
