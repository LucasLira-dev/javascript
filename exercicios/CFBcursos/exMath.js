const olho= [...document.getElementsByClassName("olho")]

let posx_mouse=0
let posy_mouse=0

window.addEventListener("mousemove", (evt)=>{
    let posx_mouse=evt.clientX
    let posy_mouse=evt.clientY

    const rot= Math.atan2(posy_mouse, posx_mouse)* 180/Math.PI

    olho.forEach((o) => {
        o.style.transform= "rotate("+rot+"deg)" 
    });
    
})