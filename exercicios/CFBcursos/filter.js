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

cursos.map((el, chave)=>{
    const novoelemento = document.createElement("div")
    novoelemento.setAttribute("id", "c"+chave)
    novoelemento.setAttribute("class", "curso c1")
    novoelemento.innerHTML = el

    const comandos = document.createElement("div")
    comandos.setAttribute("class", "comandos")

    const rb = document.createElement("input")
    rb.setAttribute("type", "radio")
    rb.setAttribute("name", "rb_curso")

    comandos.appendChild(rb)
    novoelemento.appendChild(comandos)
    caixaCursos.appendChild(novoelemento)
})

const radioSelecionado=()=>{
    const todosradios = [...document.querySelectorAll("input[type=radio]")]
   const radioSelecionado = todosradios.filter((ele, ind, array)=>{
        return ele.checked
   }) 
   return radioSelecionado[0]
}

btnCursoSelecionado.addEventListener("click", (evt)=>{

   const rs = radioSelecionado()
   if(rs == undefined){
    alert('selecione um curso')
   } else {
   const cursoSelecionado = rs.parentNode.parentNode.firstChild.textContent
   
   alert("curso selecionado: " + cursoSelecionado) }
})

btn_removeCurso.addEventListener("click", (evt)=>{
    const rs = radioSelecionado()
    if(rs == undefined){
        alert('selecione um curso')
       } else {
    
    const cursoSelecionado = rs.parentNode.parentNode
    cursoSelecionado.remove() }
 })