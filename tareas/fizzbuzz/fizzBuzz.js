// Escribir un programa que muestre en pantalla los números del 1 al 100, sustituyendo los múltiplos de 3 por la palabra “fizz”, los múltiplos de 5 por “buzz” y los múltiplos de ambos, es decir, los múltiplos de 3 y 5 (o de 15), por la palabra “fizzbuzz”.

for (let i = 1; i <= 100; i++) {
    console.log(i % 15 === 0 ? "fizzBuzz" : i % 3 === 0 ? "fizz" : i % 5 === 0 ? "buzz" : i);    
}