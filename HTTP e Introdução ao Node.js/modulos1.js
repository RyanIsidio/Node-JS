let modulos2 = require('./modulos2'); // server para receber a exportação dos códigos do módulo2
modulos2.nome = 'Minha calculadora está aprovada' // serve para mudar o valor da variável do módulo2

// essas três linhas de código abaixo, server para manipular os dados do módulo2 que foram exportados
console.log (modulos2.nome) 
console.log (modulos2.mult (20,10));
console.log (modulos2.soma (180,20));
