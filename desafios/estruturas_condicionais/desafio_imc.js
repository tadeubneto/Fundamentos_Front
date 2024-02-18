/* formula imc
imc = peso / (altura*altura)

tabela
abaixo de 18,5 abaixo do peso
entre 18,5 e 25 peso normal
entre 25 e 30 acima do peso
entre 30 e 40 obeso
acima de 40 obesidade grave

*/


const peso = 70;
const altura = 1.75;
const imc = peso / (altura*altura);

console.log(imc.toFixed(2))

if (imc <18.5) {
  console.log('abaixo do peso')
} else if (imc >=18.5 && imc <=25) {
  console.log('peso normal')
} else if (imc >25 && imc <=30) {
  console.log('acima do peso')
} else if (imc >30 && imc <=40){
  console.log('Obeso')
} else {
  console.log('Obesidade Grave')
}
