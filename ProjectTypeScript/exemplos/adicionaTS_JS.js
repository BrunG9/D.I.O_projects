"use strict";
let button = document.getElementById('button');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let devePrintar = true;
let frase = 'O valor é ';
function adicionaNumeros(num1, num2, devePrintar, frase) {
    let resultado = num1 + num2;
    if (devePrintar) {
        console.log(frase + resultado);
    }
    return resultado;
}
if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            console.log(adicionaNumeros(Number(input1.value), Number(input2.value), devePrintar, frase));
        }
    });
}
