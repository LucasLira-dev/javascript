const cursos=["javascript", "HTML", "CSS", "PHP", "Python", "Ruby", "Java"];

const clubes= ["Santos", "Corinthians", "Palmeiras", "São Paulo", "Flamengo", "Vasco", "Botafogo"];

export default function getTodosCursos(){
    return cursos;
} //exporta a função getCursos para ser utilizada em outros arquivos. ao usar FUNCTION não é necessário usar o nome da função entre chaves e pode por o default antes da função   

const GetCurso=(c)=>{
    return cursos[c]
} //função que retorna o curso na posição c

export{cursos, clubes} //exporta as constantes cursos e clubes para serem utilizadas em outros arquivos

export{GetCurso} //exporta a função GetCurso para ser utilizada em outros arquivos