var nomes = ["alexandre", "isaura","joaquim", "lucas", "luzia"]

console.log('teste de beleza')
for(let i in nomes) {
    if(nomes[i]== "lucas") {
    console.log(` ${nomes [i]} é lindo`) 
    }

    else {
        console.log(` ${nomes [i]} é feio(a)`)
    
    }
} 

    /* usando FOR OF */

    for(i of nomes){
        console.log(i)
    }
        
  
