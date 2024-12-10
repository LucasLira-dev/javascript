const pessoa={
    nome: "lucas",
    canal: "cfb cursos",
    curso: "javascript",
    aulas:{
        aula01: "introdução",
        aula02: "variaveis",
        aula03: "condicional"

    }
}


const j_json= JSON.stringify(pessoa) // converte OBJETO para STRING JSON
console.log(j_json)


const o_json = JSON.parse(j_json) // converte STRING JSON para OBJETO


console.log(o_json)