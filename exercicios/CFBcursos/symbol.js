const s1= Symbol() 
const s2= Symbol()
const s3= Symbol.for("lucas")//cria um symbol com um nome
const s4= Symbol.for("mendes")//cria um symbol com um nome

console.log(s1===s2)// retorna false ja que symbols são unicos
console.log(Symbol.keyFor(s3)) //retorna o nome do symbol for "lucas"
console.log(Symbol.keyFor(s4))//retorna o nome do symbol for "mendes"