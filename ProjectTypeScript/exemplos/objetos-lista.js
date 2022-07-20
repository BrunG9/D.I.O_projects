"use strict";
const pessoa = {
    nome: 'Bruno',
    idade: 21,
    profissao: 'Dev'
};
const pedro = {
    nome: 'Pedro',
    idade: 21,
    profissao: 'Artista'
};
//Forma inconsistente pois como profissao é string a pessoa escreve da forma que quiser
const paula = {
    nome: 'Paula',
    idade: 21,
    profissao: 'Developer'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["JogadorDeFutebol"] = 3] = "JogadorDeFutebol";
    Profissao[Profissao["Streamer"] = 4] = "Streamer";
})(Profissao || (Profissao = {}));
const luiz = {
    nome: 'Luiz',
    idade: 21,
    profissao: Profissao.JogadorDeFutebol
};
const carlos = {
    nome: 'Carlos',
    idade: 22,
    profissao: Profissao.JogadorDeFutebol,
    materias: ['Mat', 'Prog', 'Comp']
};
const julia = {
    nome: 'Julia',
    idade: 22,
    materias: ['Mat', 'Prog', 'Comp']
};
function listaItems(lista) {
    for (const item of lista) {
        console.log('-', item);
    }
}
listaItems(carlos.materias);
