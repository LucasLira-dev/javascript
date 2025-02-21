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

const c1= Object.assign([], computador) //copia o objeto computador para c1
c1.info()


const o1= {obj1: "1"} 
const o2= {obj2: "2"}
const o3= {obj3: "3"}
const o4= Object.assign(o1, o2, o3) //faz uma mesclagem dos objetos o1, o2 e o3 e armazena em o4

console.log(o4)

const c2= Object.create(computador) //cria um novo objeto com base no objeto computador

c2.cpu= "i9"
c2.ram= "64gb"
c2.hd="2tb"

c2.info() //chama a função info do objeto computador

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


















