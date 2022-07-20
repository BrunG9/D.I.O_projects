enum Trabalho {
    Atriz,
    Padeiro
}

type THumano = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let pessoa1: THumano = {
    nome: 'maria',
    idade: 29,
    profissao: Trabalho.Atriz
};

let pessoa2: THumano = {
    nome: 'roberto',
    idade: 19,
    profissao: Trabalho.Padeiro
};

let pessoa3: THumano = {
    nome: 'laura',
    idade: 32,
    profissao: Trabalho.Atriz
};

let pessoa4: THumano = {
    nome: "carlos",
    idade: 19,
    profissao: Trabalho.Padeiro
}