


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


  

