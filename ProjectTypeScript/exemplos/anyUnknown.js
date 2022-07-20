"use strict";
let anyEstaDeVolta;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'text';
let stringTest = 'verificar';
stringTest = anyEstaDeVolta;
let unknownValor;
unknownValor = 3;
unknownValor = 'texto';
unknownValor = true;
unknownValor = 'texto 2';
let testeString = 'verify';
/* testeString = unknownValor;
Por ser unknown tem que se verificar se é do mesmo tipo */
if (typeof unknownValor === 'string') {
    testeString = unknownValor;
}
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro('Deu erro', 500);
/* :never
codigo que é finalizado no meio(nao termina), interrompe o fluxo do codigo
ex: looping infinito */ 
