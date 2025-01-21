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



/*
0
: 
{name: 'national', url: 'https://pokeapi.co/api/v2/pokedex/1/'}
1
: 
{name: 'kanto', url: 'https://pokeapi.co/api/v2/pokedex/2/'}
2
: 
{name: 'original-johto', url: 'https://pokeapi.co/api/v2/pokedex/3/'}
3
: 
{name: 'hoenn', url: 'https://pokeapi.co/api/v2/pokedex/4/'}
4
: 
{name: 'original-sinnoh', url: 'https://pokeapi.co/api/v2/pokedex/5/'}
5
: 
{name: 'extended-sinnoh', url: 'https://pokeapi.co/api/v2/pokedex/6/'}
6
: 
{name: 'updated-johto', url: 'https://pokeapi.co/api/v2/pokedex/7/'}
7
: 
{name: 'original-unova', url: 'https://pokeapi.co/api/v2/pokedex/8/'}
8
: 
{name: 'updated-unova', url: 'https://pokeapi.co/api/v2/pokedex/9/'}
9
: 
{name: 'conquest-gallery', url: 'https://pokeapi.co/api/v2/pokedex/11/'}
10
: 
{name: 'kalos-central', url: 'https://pokeapi.co/api/v2/pokedex/12/'}
11
: 
{name: 'kalos-coastal', url: 'https://pokeapi.co/api/v2/pokedex/13/'}
12
: 
{name: 'kalos-mountain', url: 'https://pokeapi.co/api/v2/pokedex/14/'}
13
: 
{name: 'updated-hoenn', url: 'https://pokeapi.co/api/v2/pokedex/15/'}
14
: 
{name: 'original-alola', url: 'https://pokeapi.co/api/v2/pokedex/16/'}
15
: 
{name: 'original-melemele', url: 'https://pokeapi.co/api/v2/pokedex/17/'}
16
: 
{name: 'original-akala', url: 'https://pokeapi.co/api/v2/pokedex/18/'}
17
: 
{name: 'original-ulaula', url: 'https://pokeapi.co/api/v2/pokedex/19/'}
18
: 
{name: 'original-poni', url: 'https://pokeapi.co/api/v2/pokedex/20/'}
19
: 
{name: 'updated-alola', url: ' */