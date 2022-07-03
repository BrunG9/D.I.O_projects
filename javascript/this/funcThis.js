let pessoa = {
    nome: "Bob",
    idade: 20
}
let animal = {
    nome: "Rex",
    idade: 10
}

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} 
        terá ${this.idade + anos} anos de idade.`;
}

calculaIdade.call(pessoa, 5);
calculaIdade.apply(animal, [5]);