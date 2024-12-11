const Nave= function(energia){
    this.energia= energia
    this.disparos= 100
}

Nave.prototype.vidas=5
Nave.prototype.disparar= function(){
    if(this.disparos>0){
        this.disparos--
       
    }


}



const nv1= new Nave(100)

nv1.disparar()
nv1.disparar()
nv1.disparar()
nv1.disparar()
nv1.disparar()

console.log(nv1.disparos)