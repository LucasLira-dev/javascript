import getTodosCursos, {cursos, clubes} from "./script2.js";
import *as m_curso from "./script2.js";//renomeia o arquivo script2.js para m_curso e importa tudo que está no arquivo script2.js

console.log("olá mundo");
console.log(m_curso.cursos);
console.log(m_curso.clubes);
console.log(m_curso.GetCurso(1)); //retorna o curso na posição indicada
console.log(m_curso.default())//retorna a função getTodosCursos