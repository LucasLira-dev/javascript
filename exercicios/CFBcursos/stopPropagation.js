const caixa1 = document.querySelector('.caixa1')
const cursos = [...document.querySelectorAll('.cursos')]
const c1 = document.getElementById("d1")

caixa1.lastElementChild.innerHTML= 'oiiii'
c2 = caixa1.lastElementChild
c2.style.background = 'red'

    caixa1.addEventListener("click", (evt)=>{
        console.log("clicou")
    })


    cursos.map((el)=>{
        el.addEventListener("click", (evt)=>{
            evt.stopPropagation()
        })
    })


    