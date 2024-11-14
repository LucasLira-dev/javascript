function* cores(){
   yield "vermelho"
    yield "amarelo"
     yield "azul"
}

const itc= cores()
console.log(itc.next().value)
console.log(itc.next().value)