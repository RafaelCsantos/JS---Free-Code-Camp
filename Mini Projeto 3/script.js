// divisivel por 3 - Fizz
// divisivel por 5 = Buzz
// Divisivel por 3 e 5 - FizzBuzz
// nao é divisivel por 3 e 5 - entrada
// não é número? "nao é um numero"

const resultado = fizzBuzz();
console.log(resultado);

function fizzBuzz(entrada) {
if (typeof entrada !== "number")
    return "não é um número";
    
 if (entrada % 3 === 0 && entrada % 5 ===0)
    return 'FizzBuzz';
    
if (entrada %3 === 0)
    return 'Fizz';
    
if (entrada %5 === 0)
    return 'Buzz';

return console.log('fora do intervalo');

}