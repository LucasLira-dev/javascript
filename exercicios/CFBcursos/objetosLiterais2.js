const objeto= document.getElementById('objetos');

const computador={
    cpu: "i9",
    ram: "64gb",
    hd: "2tb",
    info: function(){
        console.log(`
            CPU: ${this.cpu} 
            RAM: ${this.ram} 
            HD: ${this.hd}`)
    }
}

computador.placaVideo= "RTX 3090";

computador.info();

const computadores= [
    {
        cpu: "i9",
        ram: "64gb",
        hd: "2tb"
    },

    {
        cpu: "i7",
        ram: "32gb",
        hd: "2tb"
    },

    {
        cpu: "i5",
        ram: "16gb",
        hd: "1tb"
    }
]

computadores.forEach((c)=>{
    const div= document.createElement('div');
    div.setAttribute("class", "computador");
    div.innerHTML= `
        <p> CPU: ${c.cpu} </p>
        <p> RAM: ${c.ram} </p>
        <p> HD: ${c.hd} </p>
    `
    objeto.appendChild(div)
})