/* 
listas (arrays)

entre colchetes []

podemos add e remover elementos de uma lista

a lista pode começar vazia

para percorrer dinamicamente uma lista é necessário estruturas de repetição: for

//crinado uma tabuada com for

const numero = 7;

for (let i = 1 ; i <= 10; i++) {
//console.log(i * numero);
}

// apenas numeros pares

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < numeros.length; i++) {
  const numero = numeros[i]
  if (numero % 2 === 0) {
    console.log(numero)
  }
}




const numeros = []

for (let i = 0; i < 10; i++){
  const numeroPar = i % 2 === 0;
if (numeroPar) {
  numeros.push(i)
}
}

console.log(numeros)
*/
