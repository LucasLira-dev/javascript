


const endpoint = 'https://dummyjson.com/products';

const p_texto = document.getElementById("p_texto");
const btn_fetch= document.getElementById("btn_texto")

fetch(endpoint)
  .then(res => res.json())
  .then(dados => {
    console.log(dados);
    // Iterar sobre todos os produtos e adicioná-los ao HTML 
    
  btn_fetch.addEventListener("click", (evt)=>{
   dados.products.forEach(product => { 
      const productElement = document.createElement("div"); 
      const productDescription= document.createElement("p")
      const productImg= document.createElement("img")
      const productPrice= document.createElement("p")

      productImg.setAttribute("src", product.images)

      productElement.innerHTML = product.title;
      productDescription.innerHTML= product.description
      productPrice.innerHTML= ` R$ ${product.price}`

      p_texto.appendChild(productElement);
      productElement.appendChild(productDescription)
      productElement.appendChild(productImg)
      productElement.appendChild(productPrice)

      productPrice.style.background= "red"
    });
  })
  })
  .catch(error => console.error('Erro ao buscar dados:', error));


  

const btn_enviarDados= document.getElementById("btn_enviarDados")
let dados={
  nome: "lucas", 
  canal: "cfb cursos",
  curso: "javascript"
}

let cabecalho={
  method: "POST",
  headers: { 
    "Content-Type": "application/json",
   },
  body: JSON.stringify(dados)
}


const gerarDados=()=>{
  const endpoint= "https://dummyjson.com/products"
  fetch(endpoint, cabecalho)
  .then(res => res.json())
  .then(ret =>{
    console.log(ret)
  }
  )
}

btn_enviarDados.addEventListener("click", (evt)=>{
  gerarDados()
})