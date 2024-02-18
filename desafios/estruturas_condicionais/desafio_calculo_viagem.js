/* Faça um programa para calcular o valor de uma viagem


variáveis
1 preço etanol
2 preço gasolina
3 tipo de combustivel
4 gasto médio de combustivel
5 distancia da viagem

imprima o valor que será gasto na viagem */

const precGasolina = 5.79
const precEtanol = 4.35
const consumoMedio = 11
const distPerco = 300
const tipoCombustivel = 'Gasolina'

if (tipoCombustivel === 'Etanol') {
  const resultado = (distPerco * precEtanol) / consumoMedio
  console.log(
    'O consumo desta viagem em ' +
      tipoCombustivel +
      ' é de R$' +
      resultado.toFixed(2)
  )
} else {
  const resultado = (distPerco * precGasolina) / consumoMedio
  console.log(
    'O consumo desta viagem em ' +
      tipoCombustivel +
      ' é de R$' +
      resultado.toFixed(2)
  )
}
