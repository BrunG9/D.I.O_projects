const pares = [2, 4, 6, 8, 10];

const maca = {
    value: 2
}
const laranja = {
    value: 5
}


let multiplicacao = (arr) => {
    return arr.map((par) => {
        return par * 2;
    })
}

let multiplicacaoComThis = (arr, thisArg) => {
    return arr.map((item) => { 
        return item * this.value; 
    }, thisArg)
}

console.log(multiplicacao(pares));

console.log(multiplicacaoComThis(pares, maca));
console.log(multiplicacaoComThis(pares, laranja));