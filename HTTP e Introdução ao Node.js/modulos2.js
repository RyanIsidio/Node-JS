let nome = 'Minha calculadora'

function soma (a,b) {
    return a + b;
}

function sub (a,b) {
    return a - b;
}

function mult (a,b) {
    return a * b;
}

function div (a,b) {
    return a / b
}

module.exports = { // exporta/envia as variáveis e functions para ser manipulado no módulo1
    soma,
    sub,
    mult,
    div,
    nome,
};
