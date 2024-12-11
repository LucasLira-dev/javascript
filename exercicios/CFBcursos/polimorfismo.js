class Animal{
    speak(){
        console.log("o animal faz um som")
    }
}


class Cachorro extends Animal{
   speak(){
    console.log("auauau")
   } 
}

class Gato extends Animal{
    speak(){
        console.log("miauuuuuu")
    }
}

class Vaca{
    speak(){
        console.log("muuuuuuuu")
    }
}

const animais= [new Animal(), new Cachorro(), new Gato()]

animais.forEach((animal)=>{
    animal.speak()
})