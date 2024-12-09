let http = require("http");

http.createServer(function(requisicao,resposta){
    resposta.end ('<h1>Bem vindo seu careca !!</h1><br><h4>passando para lembrar que vc n tem cabelo</h4>')

}).listen(8080);
console.log ('Servidor Ativado')