"use strict";
function somaValores(inp1, inp2) {
    if (typeof inp1 == "string" || typeof inp2 === "string") {
        return inp1.toString() + inp2.toString();
    }
    else {
        return inp1 + inp2;
    }
}
console.log(somaValores(1, 4));
console.log(somaValores("fo", "me"));
console.log(somaValores("dia ", 10));
