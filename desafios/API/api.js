const imgs= document.getElementById("imgs")

const endpoint= 'https://pokeapi.co/api/v2/pokedex/1/'

fetch(endpoint)
.then(res=> res.json())
.then(dados=>{
    console.log(dados)
    dados.pokemon_entries.forEach(dado => {
      const p= document.createElement("p") 
      p.innerHTML= dado.pokemon_species.name
      
      imgs.appendChild(p)
 
      const p2= document.createElement("p") 
      p2.innerHTML= dado.pokemon_species.url
      imgs.appendChild(p2)


    });
}
)



