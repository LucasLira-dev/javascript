const nome= new String("lucas mendes")//cria um objeto string
const nome2= new String("lucas mendes")//cria um objeto string
const curso= new String("CFBCursos")//cria um objeto string


//console.log(nome.charAt(2))//retorna o caractere na posição 2
//console.log(nome.charCodeAt(0))//retorna o valor unicode do caractere na posição 

//console.log(nome.concat(curso))//concatena as strings

//console.log(nome.indexOf("a"))//retorna a posição do caractere "a"  na string

//console.log(curso.lastIndexOf("C"))//retorna a posição da última ocorrência do caractere "C" na string


console.log(nome.localeCompare(nome2))//compara duas strings, se retornar 0 são iguais, se retornar 1 são diferentes, no caso de -1 a primeira string é maior que a segunda. em caso de duas palavras, ela compara apenas a primeira.

console.log(nome.replace("lucas", "luquinhas"))//substitui a primeira palavra pela segunda

console.log(nome.search("u"))//retorna a posição do caractere "u" na string

let sobrenome= nome.slice(6)//retorna a string a partir da posição 6

console.log(sobrenome)//imprime a string

let arr_nome= nome.split(" ")//divide a string em um array, separando pelo espaço

console.log(arr_nome)//imprime o array

let parte1= nome.substring(0, 5)//retorna a string a partir da posição 0 até a posição 5
console.log(parte1)//imprime a string

console.log(nome.toLowerCase())//retorna a string em minúsculo

console.log(nome.toUpperCase())//retorna a string em maiúsculo

console.log(nome.valueOf())//retorna o valor primitivo da string    

let num= 1
console.log(typeof(num.toString()))// retorna o valor do tipo string
