let valores = [8,1,4,2,5,8]
valores.sort()

/* for (let pos = 0; pos < valores.length; pos++) {
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
} */

    for (let pos in valores) {
        console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
    }