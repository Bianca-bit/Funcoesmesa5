//adição

console.log(2+2);

//subtração

console.log(10-5);

//multiplicação
console.log(10*5);

//divisão
console.log(10/2);

//incremento

let numero =  10;
console.log(++numero);

//decremento

console.log(--numero);
console.log(--numero);

//comparação de maior

console.log(10 > 5);

//comparação de menor

console.log(10 < 5);

//comparação de menor ou igual

console.log(3 <= 2);

//comparação de maior ou igual

console.log(20 >= 14);

//comparação de igualdade

console.log("ola" == 20);

//comparação de igualdade rígido

console.log(5 === "5");

//comparação de diferentes

console.log( "ola" != "oi");

//comparação de diferente rigido

console.log(10 !== "ola");

//compardor lógico &&

console.log(10 > 5 && 8 > 10 && 11 > 5);

//comparador lógico OR ||

console.log(10 > 5 || 8  > 10 );

//comparador de negação

console.log(!5 > 3);

//operador de concatenar
let nome = "João";
let sobrenome = "Oliveira"


console.log(nome + " " + sobrenome);

// Estrutura básica function

function somar (a, b) {
    return a + b;
}

// Funções nomeadas (declaradas)

function  fazerSorvete(quantidade) {
    return ''.repeat(quantidade);
}

// Function expression (expressão de função)

let fazerSushi = function (quantidade) {
    return ''.repeat(quantidade);
}

//Invocando uma função

function fazerSorvete() {
    return '';
}

function bemVindo(nome, sobrenome) {
    return 'Olá ' + nome + ' ' + sobrenome;
}

bemVindo('João', 'da Silva');

// converter string em url
function url (nomeSite) {
    console.log("http://www." + nomeSite + ".com.br")
}

url("Amazon");





