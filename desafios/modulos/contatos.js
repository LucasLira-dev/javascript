import {contatos} from './bancoContatos.js'


let contato = {
    getTodosContatos: () => {
        return contatos;
    },

    getContato: (i_cont) => {
        return contatos[i_cont];
    },

    addContato: (novoContato, destinoDOM) => {
        const cont = {
            nome: novoContato.nome,
            telefone: novoContato.telefone,
            email: novoContato.email
        };

        contatos.push(cont);
        destinoDOM.innerHTML = '';

        contatos.forEach((c, indice) => {
            const btn = document.createElement('button');
            btn.setAttribute('id', 'btn_' + indice);
            const div = document.createElement('div');
            div.setAttribute('class', 'contato');
            btn.innerHTML = 'Remover';

            btn.addEventListener('click', (evt) => {
                contatos.splice(indice, 1);
                contato.updateDOM(destinoDOM);
            });

            const p_nome = document.createElement("p");
            p_nome.innerHTML = c.nome;

            const p_telefone = document.createElement('p');
            p_telefone.innerHTML = c.telefone;

            const p_email = document.createElement('p');
            p_email.innerHTML = c.email;

            div.appendChild(p_nome);
            div.appendChild(p_telefone);
            div.appendChild(p_email);
            div.appendChild(btn);

            destinoDOM.appendChild(div);
        });
    },

    updateDOM: (destinoDOM) => {
        destinoDOM.innerHTML = '';
        contatos.forEach((c, indice) => {
            const btn = document.createElement('button');
            btn.setAttribute('id', 'btn_' + indice);
            const div = document.createElement('div');
            div.setAttribute('class', 'contato');
            btn.innerHTML = 'Remover';

            btn.addEventListener('click', (evt) => {
                contatos.splice(indice, 1);
                contato.updateDOM(destinoDOM);
            });

            const p_nome = document.createElement("p");
            p_nome.innerHTML = c.nome;

            const p_telefone = document.createElement('p');
            p_telefone.innerHTML = c.telefone;

            const p_email = document.createElement('p');
            p_email.innerHTML = c.email;

            div.appendChild(p_nome);
            div.appendChild(p_telefone);
            div.appendChild(p_email);
            div.appendChild(btn);

            destinoDOM.appendChild(div);
        });
    }
};

export default contato;

/*let contato = {
    getTodosContatos: () => {
        return contatos
    }, 

    getContato:  (i_cont)=>{
        return contatos[i_cont]
    },

    addContato: (novoContato, destinoDOM)=>{

        const cont={
            nome:novoContato.nome,
            telefone: novoContato.telefone,
            email: novoContato.email
        }

        contatos.push(cont)
        destinoDOM.innerHTML=''
        contatos.forEach((c, indice)=>{

            const btn= document.createElement('button')
            btn.setAttribute('id', 'btn_' + indice)
            const div= document.createElement('div')
            div.setAttribute('class','contato')
            btn.innerHTML='Remover'
            
            btn.addEventListener('click', (evt)=>{
                destinoDOM.innerHTML=''
                contatos.splice(indice, 1)
                contato.addContato(contatos, destinoDOM)
            });
            contato.addContato({ nome: null }, destinoDOM); // Chama a função para atualizar a lista
        });

        if (c.nome !== undefined) {
            const p_nome = document.createElement("p");
            p_nome.innerHTML = c.nome;

            const p_telefone = document.createElement('p');
            p_telefone.innerHTML = c.telefone;

            const p_email = document.createElement('p');
            p_email.innerHTML = c.email;

            div.appendChild(p_nome);
            div.appendChild(p_telefone);
            div.appendChild(p_email);
            div.appendChild(btn);

            destinoDOM.appendChild(div);
        } else {
            contatos.pop();
        }
    }
}

export default contato;

*/


       /*     })


            if(c.nome!=undefined){
                const div= document.createElement('div')
            div.setAttribute('class','contato')
    
            const p_nome= document.createElement("p")
            p_nome.innerHTML= c.nome

            const p_telefone= document.createElement('p')
            p_telefone.innerHTML= c.telefone
    
            const p_email= document.createElement('p')
            p_email.innerHTML= c.email
    
            div.appendChild(p_nome)
            div.appendChild(p_telefone)
            div.appendChild(p_email)
    
            destinoDOM.appendChild(div)
            } else{
                contatos.pop()
            }
          
        })
       
        }
}



export default contato */