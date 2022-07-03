let arr = [];

function validaArray(arr, num){
    try{
        if (!arr && !num) 
            throw ReferenceError("Envie os parametros");

        if (typeof(arr) !== typeof(Object)) 
            throw TypeError("Array nao é do tipo Object");

        if (typeof(num) !== typeof(Number)) 
            throw TypeError("Num nao é do tipo Number");

        if (arr.length !== num) 
            throw RangeError;

        return (arr);
    }
    catch(e) {
        if(e instanceof ReferenceError){
            console.log("Este erro é um ReferenceError! ")
            console.log(e.message)
        }
        else if(e instanceof TypeError){
            console.log("Este erro é um TypeError! ")
            console.log(e.message)
        }
        else if(e instanceof RangeError){
            console.log("Este erro é um RangeError! ")
            console.log(e.message)
        }
        else {
            console.log("Este erro é inesperado" + e)
        }
    }
}