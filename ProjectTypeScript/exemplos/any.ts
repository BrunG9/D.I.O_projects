let valorAny: any;
valorAny = 2;
valorAny = '5';
valorAny = true;

let valorString: string = 'texto str1';
valorString = valorAny;
let valorString2: string = 'texto str2';
valorString2 = valorAny;

function somaString(string1: string, string2: string) {
    console.log(string1 + string2);
}


somaString(valorString, valorString2);