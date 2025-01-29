class Cxmsg{
    static cor= "888"
    static destino= null
    static divmsg= null
    static tipo= null
    static comando_sn= null
    static textos= []
   

    static mostrar=(config, titulo, texto)=>{
        this.cor= config.cor
        this.tipo= config.tipo
        this.textos= config.textos
        this.comando_sn= ()=>{ config.comando_sn()}
        this.destino= document.body
        this.titulo= titulo
        this.texto= texto

       this.divmsg= document.createElement('div')

       const estilo_divmsg= //estilo da divmsg
         'display: flex;' + 
         'justify-content: center;' +
         'align-items: center;' +
         'position: absolute;' +
         'top: 0;' +
         'left: 0;' +
         'width: 100%;' +
         'height: 100vh;' +
         'background-color: rgba(0, 0, 0, 0.7);'  
        this.divmsg.setAttribute('id', 'divmsg')
        this.divmsg.setAttribute('style', estilo_divmsg)//seta o estilo da divmsg
        this.destino.prepend(this.divmsg)//prepend adiciona o elemento no inicio do body


        const areaCaixamsg= document.createElement('div')

        const estilo_areaCaixamsg= //estilo da areaCaixamsg
           'display: flex;' +
           'justify-content: flex-start;' +
           'align-items: flex-start;' +
           'flex-direction: column;' +
           'width: 300px;' 


        areaCaixamsg.setAttribute('style', estilo_areaCaixamsg)//seta o estilo da areaCaixamsg

        this.divmsg.appendChild(areaCaixamsg)//adiciona a areaCaixamsg na divmsg


        const tituloCxmsg= document.createElement('div')

        const estilo_tituloCxmsg= //estilo do tituloCxmsg
           'display: flex;' +
           'justify-content: flex-start;' +
           'align-items: center;' +
           'width: 100%;' +
           'background-color: '+this.cor+';' +
           'color: #fff;' +
           'padding: 5px;' +
           'border-radius: 5px 5px 0px 0px;'


        tituloCxmsg.setAttribute('style', estilo_tituloCxmsg)//seta o estilo do tituloCxmsg 

        tituloCxmsg.innerHTML= this.titulo//seta o tituloCxmsg

        areaCaixamsg.appendChild(tituloCxmsg)//adiciona o tituloCxmsg na areaCaixamsg

        const estilo_corpoCxmsg= 
              'display: flex;' +
              'justify-content: flex-start;' +
              'align-items: flex-start;' +
              'color: #000;' +
              'width: 100%;' +
              'background-color: #eee;' +
              'padding: 30px 5px;'

        const corpoCxmsg= document.createElement('div')
        corpoCxmsg.setAttribute("style", estilo_corpoCxmsg)
        corpoCxmsg.innerHTML= this.texto
        areaCaixamsg.appendChild(corpoCxmsg)


        const estilo_rodapeCxmsg=
                'display: flex;' +
                'justify-content: space-around;' +
                'align-items: center;' +
                'width: 100%;' +
                'background-color: #ccc;' +
                'color: #000;' +
                'padding: 5px;' +
                'border-radius: 0px 0px 5px 5px;'

        const rodapeCxmsg= document.createElement('div')
        rodapeCxmsg.setAttribute("style", estilo_rodapeCxmsg)
        areaCaixamsg.appendChild(rodapeCxmsg)


        const estilo_botaoCxmsg=
                'text-transform: uppercase;' +
                'padding: 10px 50px;' +
                'background-color: '+this.cor+';' +
                'color: #fff;' +
                'cursor: pointer;' +
                'border-radius: 5px;'

        if(this.tipo=="Ok"){
            const btn_ok= document.createElement('button')
            btn_ok.innerHTML= 'ok'
            btn_ok.setAttribute('style', estilo_botaoCxmsg)
            btn_ok.addEventListener('click', ()=>{
                this.ocultar()
            })
            rodapeCxmsg.appendChild(btn_ok)
        } 
        else if(this.tipo=="sn"){
            const btn_sim= document.createElement('button')
            btn_sim.innerHTML= this.textos[0]
            btn_sim.setAttribute('style', estilo_botaoCxmsg)
            btn_sim.addEventListener('click', ()=>{
                this.comando_sn()
                this.ocultar()
            })
            rodapeCxmsg.appendChild(btn_sim)

            const btn_nao= document.createElement('button')
            btn_nao.innerHTML= this.textos[1]
            btn_nao.setAttribute('style', estilo_botaoCxmsg)
            btn_nao.addEventListener('click', ()=>{
             
                this.ocultar()
            })
            rodapeCxmsg.appendChild(btn_nao)
        }
    }


    static ocultar=()=>{
        this.divmsg.remove()
    }
}

export {Cxmsg}