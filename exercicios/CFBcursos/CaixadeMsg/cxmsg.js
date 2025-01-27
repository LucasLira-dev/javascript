class Cxmsg{
    titulo= null
    texto= null
    cor= null
    destino= null
    divmsg= null

    constructor(config){
        this.titulo= config.titulo
        this.texto= config.texto
        this.cor= config.cor
        this.destino= document.body
       
    }

    mostrar=()=>{
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
    }


    ocultar=()=>{

    }
}