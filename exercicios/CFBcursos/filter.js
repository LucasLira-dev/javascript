/*const idades = [10,30,15,22, 17, 12]


const maior = idades.filter((valor)=>{
    if(valor >= 18){
        return valor
    }
})

const menor = idades.filter((valor)=>{
    if(valor < 18){
        return valor
    }
})

console.log(`as idades maiores de 18 são: ${maior} no total são ${maior.length} pessoas`)

console.log(`as idades menores de 18 são: ${menor} no total são ${menor.length} pessoas`) */



const caixaCursos = document.querySelector('#Caixacursos')
const btn_c =[...document.querySelectorAll('.curso')]
const c1_2 = document.querySelector('#c1_2')
const cursos = ["HTML", "CSS", "JavaScript", "PHP"]
const btnCursoSelecionado = document.getElementById('btnCursoSelecionado')
const btn_removeCurso = document.getElementById('btnRemovercurso')
const btnAdicionarNovoCursoAntes = document.getElementById('btnAdicionarNovoCursoAntes')
const btnAdicionarNovoCursoDepois = document.getElementById('btnAdicionarNovoCursoDepois')
const nomeCurso = document.getElementById('nomecurso')

let indice = 0

const tirarSeleçao=()=>{
    const cursosSelecionado= [...document.querySelectorAll(".selecionado")]
    cursosSelecionado.map((el)=>{
         el.classList.remove("selecionado")
})
}


const criarNovoCurso=(curso)=>{
    const novoelemento = document.createElement("div")
    novoelemento.setAttribute("id", "c"+indice)
    novoelemento.setAttribute("class", "curso c1")
    novoelemento.innerHTML = curso
    novoelemento.addEventListener("click", (evt)=>{
        tirarSeleçao()
        evt.target.classList.toggle("selecionado")
        
    })

    return novoelemento
}

cursos.map((el, chave)=>{
    
    const novoelemento = criarNovoCurso(el)
    caixaCursos.appendChild(novoelemento)
    indice++
})

const cursosSelecionado=()=>{
    const cursosSelecionado = [...document.querySelectorAll(".selecionado")]
   return cursosSelecionado[0]
}

btnCursoSelecionado.addEventListener("click", (evt)=>{

    
  try{

   alert("curso selecionado: " + cursosSelecionado().innerHTML)  } catch(ex){ 
   alert('selecione um curso')
          }
   })


btn_removeCurso.addEventListener("click", (evt)=>{
    const cs = cursosSelecionado()
    if(cs!= undefined){
        cs.remove()
      
       } else {
        alert('selecione um curso')
    }
 })

 btnAdicionarNovoCursoAntes.addEventListener("click", (evt)=>{
   if(nomeCurso!= ""){
    
    const novoCurso = criarNovoCurso(nomeCurso.value)
    caixaCursos.insertBefore(novoCurso,cursosSelecionado())
   
   } else {
    alert('digite um curso')
   }
 })

 btnAdicionarNovoCursoDepois.addEventListener("click", (evt)=>{
    
   if(nomeCurso!= ""){
   const novoCurso = criarNovoCurso(nomeCurso.value)
   caixaCursos.insertBefore(novoCurso,cursosSelecionado().nextSibling)
    
   } else {
    alert('digite um curso')
   }
 })