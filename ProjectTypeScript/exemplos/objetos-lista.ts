const pessoa = {
    nome: 'Bruno',
    idade: 21,
    profissao: 'Dev'
}

const pedro: {nome: string, idade: number, profissao: string} = {
    nome: 'Pedro',
    idade: 21,
    profissao: 'Artista'
}
//Forma inconsistente pois como profissao é string a pessoa escreve da forma que quiser
const paula: {nome: string, idade: number, profissao: string} = {
    nome: 'Paula',
    idade: 21,
    profissao: 'Developer'
}

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    JogadorDeFutebol,
    Streamer
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao ?: Profissao
}
interface Estudante extends Pessoa {
    materias: string[]
}


const luiz: Pessoa = {
    nome: 'Luiz',
    idade: 21,
    profissao: Profissao.JogadorDeFutebol
}
const carlos: Estudante = {
    nome: 'Carlos',
    idade: 22,
    profissao: Profissao.JogadorDeFutebol,
    materias: ['Mat', 'Prog', 'Comp']
}
const julia: Estudante = {
    nome: 'Julia',
    idade: 22,
    materias: ['Mat', 'Prog', 'Comp']
}

function listaItems(lista: string[]){
    for (const item of lista) {
        console.log('-', item)
    }
}

listaItems(carlos.materias);