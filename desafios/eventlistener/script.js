const c1 = document.getElementById('conteiner1')
const c2 = document.getElementById('conteiner2')
const btn = document.getElementById('botao')
const cursos =[... document.querySelectorAll('.cursos')]



cursos.map((el)=>{
    el.addEventListener("click", (evt)=>{
       const curso = evt.target
       curso.classList.toggle("selecionado")
       
    })
})

btn.addEventListener('click', ()=>{
    const selec = [... document.querySelectorAll('.selecionado')]
    const NaoSelec = [... document.querySelectorAll(".cursos:not(.selecionado)")]
    selec.map((el)=>{
        c2.appendChild(el)
    })

    NaoSelec.map((el)=>{
        c1.appendChild(el)
    })
})


