let nome= new String("Lucas mendes de lira")//cria um objeto string

console.log(nome.search(/Mendes/i))//retorna a posição do caractere "mendes" na string, ignorando o case sensitive (se ta maisculo ou minusculo)

console.log(nome.match(/E/g))//isso irá retornar NULL, pois não existe a letra "E" na string ja que ele nao considera o case sensitive

console.log(nome.match(/E/ig))//isso irá retornar a letra "e" da string, ignorando o case sensitive

console.log(nome.replace(/e/ig, "x"))// substitui todas as letras "e" por "x" na string, ignorando o case sensitive


console.log(nome.match(/[ec]/ig))// isso irá retornar todas as apariçoes dos caracteres que estiverem dentro dos []


let nome2= new String("lucaaaaaas mendes de lira 2004")
let email= "lucas@lucas.com.br"

console.log(nome2.match(/[a-m|0-9]/ig))


console.log(nome2.match(/[\d]/ig))// retorna apenas digitos numericos

console.log(nome2.match(/[\s]/ig))//retorna os espaços em branco

console.log(nome2.match(/[\bc]/ig))//retorna o digito especifico na string

console.log(nome2.match(/a+/ig))


let numeros= "1, 10, 100, 1000"

console.log(numeros.match(/10*/ig))

console.log(numeros.match(/10?/ig))