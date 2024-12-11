const express = require('express'); // Importando o Express
const app = express(); // Iniciando o Express

app.get('/',function(req,res){ // Cria uma rota, e dentro dessa rota tem uma resposta para o usuário
    res.send ('<h1>Bem vindo ao Guia do Programador</h1>');
});

app.get ('/blog/:artigo?', function(req,res){ // Cria uma rota, e dentro dessa rota tem uma resposta para o usuário
    
    let artigo = req.params.artigo;

    if(artigo){
        res.send (`<h2> Artigo: ${artigo} </h2>`);
    }else{
        res.send("<h3>Bem Vindo ao CarecaTok !! </h3>");
    }
})

app.get ('/canal/youtube', function(req,res){ // Cria uma rota, e dentro dessa rota tem uma resposta para o usuário
    res.send('<h3>Bem vindo ao meu canal</h3>'); 
})

app.get ('/ola/:nome/:empresa', function(req,res){

    let nome = req.params.nome
    let empresa = req.params.empresa
    res.send (`<h1>Olá ${nome} da ${empresa} Seja Bem Vindo !!</h1>`);
});
    

app.listen (1000,function(erro){ // Cria uma porta (1000) 

    if(erro) { //condição abaixo basicamente é se acontecer algum erro o sistema avisa, se não ele inicia normalmente
        console.log ('Ocorreu um Erro !!');
    } else {
        console.log ('Servidor Iniciado !!!');
    }
})
