/*funçoes são pedaços de código que podem ser invocados(chamados) a qualquer momento e quantas vezes for preciso

ex: function nome() {
console.log('teste')
}

dentro do parenteses da função, colocamos o parametro dela (mais de um parametro deve ser separado por virgula)

podemos passar uma função como parametro de outra função

quando criamos uma função e já chamamos ela após, chamamos de funções imediatamente executadas (ESTUDAR +)



--------------------------------------------------------

abaixo vamos transformar o exercicio de imc da aula de estruturas condicionais em funções para facilitar a leitura do codigo


function calcImc(peso, altura){
  return peso / (altura*altura);
}

function classificacaoImc(imc){
  if (imc <18.5) {
    return 'abaixo do peso';
  } else if (imc >=18.5 && imc <=25) {
    return 'peso normal';
  } else if (imc >25 && imc <=30) {
    return 'acima do peso';
  } else if (imc >30 && imc <=40){
    return 'Obeso';
  } else {
    return 'Obesidade Grave';
  }
}

function main(){
  const peso = 68;
  const altura = 1.65;
  const imc = calcImc(peso, altura);
  console.log(classificacaoImc(imc));
  
}  

main();

function main é criada para isolar o codigo principal*/
