const http = require('http'); // Importa o módulo HTTP do Node.js
const url = require('url'); // Importa o módulo URL do Node.js

// Cria o servidor HTTP
http.createServer(function (req, res) {
    // Configura o cabeçalho da resposta para permitir CORS (Cross-Origin Resource Sharing)
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Configura o cabeçalho da resposta para indicar que o conteúdo é JSON
    res.writeHead(200, { 'Content-Type': 'application/json' });

    // Analisa a URL e os parâmetros de consulta
    let parametros = url.parse(req.url, true);
    let mat = parametros.query.matricula; // Obtém o valor do parâmetro "matricula"
    let pas = parametros.query.senha; // Obtém o valor do parâmetro "senha"

    // Dados de resposta
    let dados = null;

    // Verifica as credenciais
    if (mat === "123" && pas === "321") {
        dados = {
            nome: "Bruno",
            acesso: 10
        };
    } else {
        dados = {
            mensagem: "Credenciais inválidas"
        };
    }

    // Envia a resposta como JSON
    res.end(JSON.stringify(dados));
}).listen(8000, () => {
    console.log('Servidor rodando em http://localhost:8000');
});