/*function primeiraFuncao(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Esperou isso aqui');
            resolve('Primeira Função');
        }, 2000);
    });
}

async function segundaFuncao(){
    console.log('iniciou');
   
    await primeiraFuncao()

    console.log('terminou');
}

segundaFuncao()
*/


// exemplo prático

function getUser(id){
    return fetch(`https://reqres.in/api/users?id=${id}`)
    .then(data=> data.json())
    .catch(err=> console.log(err))
} // função com api que retorna um usuário

async function showUserName(id){

    try{
        const user= await getUser(id) //espera a função getUser

        console.log(`o nome do uuário é: ${user.data.first_name}`);
    }
    catch(err){
        console.log(err)
    }
   
} // função que mostra o nome do usuário

showUserName(3) //chama a função showUserName com o id 3