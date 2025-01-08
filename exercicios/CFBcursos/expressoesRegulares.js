let nome= new String("Lucas mendes de lira")//cria um objeto string

console.log(nome.search(/Mendes/i))//retorna a posição do caractere "mendes" na string, ignorando o case sensitive (se ta maisculo ou minusculo)

console.log(nome.match(/E/g))//isso irá retornar NULL, pois não existe a letra "E" na string ja que ele nao considera o case sensitive

console.log(nome.match(/E/ig))//isso irá retornar a letra "e" da string, ignorando o case sensitive

console.log(nome.replace(/e/ig, "x"))// substitui todas as letras "e" por "x" na string, ignorando o case sensitive