const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10]

const filtroNums = (arr) => {
    arr.filter((num) => {
        return num % 2 === 0;
    })
}

console.log(filtroNums(numbers));