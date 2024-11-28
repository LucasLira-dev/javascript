const valores = [10,2,45,4,7,8]

const iterador = valores[Symbol.iterator]()

const texto = "youtube"

const it_texto= texto[Symbol.iterator]()



for(let sizeword = texto.length ; sizeword>0; sizeword--){
   
    
    console.log(it_texto.next().value)
    
} 