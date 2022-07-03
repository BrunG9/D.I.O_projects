let alunos = [
    {
        nome: "Astofoldo",
        idade: 20,
        nota: 8
    },
    {
        nome: "Bruno",
        idade: 21,
        nota: 10
    },
    {
        nome: "Carlos",
        idade: 20,
        nota: 5
    }
];

const alunosAprovados = (arr, mediaFinal) => {
    for (let i = 0; i < arr.length; i++){
        let aux = [];
        const {nome, nota} = arr[i]
        if (nota >= mediaFinal){
            aux.push(nome)
        }
        return (aux)
    }
}
console.log(alunosAprovados(alunos, 7));