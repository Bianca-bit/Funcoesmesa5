//converter polegadas em centímetros

function converterPolegada(polegada, centimetro) {
    return polegada * centimetro;
}

let dezPolegadas = converterPolegada
console.log (10 * 2.54);

//converter string em URL

var hotText = 'MDN';
var URL = 'https://developer.mozilla.org/';

console.log('Clique para retornar à' + hotText.link(URL));

// string que retorne a mesma frase, mas com o caracter de ex0clação

function stringExclamacao(frase, frasexclamativa){
    return "Hello Word!";
}

console.log("Hello World!");

// calcule a idade dos cachorros, considerar 1 ano humano,  equivale a 7 para o cachorro

function idadeCachorro(idadehumanos, idadecachorro){
    return idadedehumano * idadedecachorro;
}

console.log ("Um ano de cachorro equivale a", 1 * 7, "anos de humano")

//calcular o valor da hora de trabalho, considerar o parãmetro salário mensal

function horaTrabalho(salariomensal, horastrabalhadas){
    return salariomensal / horastrabalhadas;
}

console.log ("Valor total da hora de trabalho: R$", 2080 / 160, "reais")

// calcular IMC de uma pessoa, altura em centímetros, peso em quilogramas

function imc(altura, peso){
    return altura / peso;
}

console.log ("IMC = ", 166 / 62)

//transformar maisculas em minusculas

function converter(palavraMinuscula){
    console.log(palavraMinuscula.toUpperCase());
} 

converter("fui a padaria e não tinha pão")

// retornar dado do parâmetro typeof

function functiontypeof(par, impar) {
   return par !== impar;
} 

console.log(1,3,5,7);