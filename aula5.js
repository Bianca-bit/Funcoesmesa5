function somar(valor1, valor2 = 20) {
    return valor1 + valor2;
}

function subtracao(valor1, valor2 = 20) {
    return valor1 - valor2;
}

function multiplicacao(valor1, valor2 = 20) {
    return valor1 * valor2;
}

function divisao(valor1, valor2 = 20) {
    return valor1 / valor2;
}

let total = somar(10,20);
let totalSub = subtracao(20, 10);

console.log('total soma:', total)
console.log('total sub:', totalSub)
console.log('outro total', somar(total, totalSub))

multiplicacao(5,5);
divisao(10,2);
