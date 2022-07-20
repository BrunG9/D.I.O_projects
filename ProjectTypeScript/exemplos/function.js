"use strict";
function somarValoresNumericos(num1, num2, callback) {
    let resultado = num1 + num2;
    return callback(resultado);
}
function aoQuadrado(num) {
    return num * num;
}
console.log(somarValoresNumericos(1, 3, aoQuadrado));
