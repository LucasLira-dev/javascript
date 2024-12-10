class Npc{
    static alerta= false
    constructor(energia){
        this.energia= energia
    }

    info= function(){
        console.log(this.energia)
        console.log(`alerta: ${(Npc.alerta?"sim":"nao")}
        `)
    }

    static alertar= function(){
        Npc.alerta= true
    }
}

const npc1= new Npc(100)
const npc2= new Npc(88)

Npc.alertar()

npc1.info()
npc2.info()


