
// Escribir una función clousure que 
// aumente un contador en 1 cada vez que la función se llame
function counter(num) {
    return function () {
        return num++
    }
}

const count = counter(1);

console.log(count());
console.log(count());
console.log(count());
