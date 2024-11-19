const c1 = document.getElementById("d1")
/* const msg=()=>{
    alert('oiiiii')
}

 c1.addEventListener('click', msg) */
const cursos = [...document.querySelectorAll(".cursos")]

 cursos.map((el)=>{
    el.addEventListener("click", (evt)=>{
        const el= evt.target
        el.classList.add ('destaque')
    })
 })

 /*c1.addEventListener("click", (evt)=>{
    alert('clicou')
 }) */