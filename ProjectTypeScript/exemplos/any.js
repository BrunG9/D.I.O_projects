"use strict";
let valorAny;
valorAny = 2;
valorAny = '5';
valorAny = true;
let valorString = 'texto str1';
valorString = valorAny;
let valorString2 = 'texto str2';
valorString2 = valorAny;
function somaString(string1, string2) {
    console.log(string1 + string2);
}
somaString(valorString, valorString2);
