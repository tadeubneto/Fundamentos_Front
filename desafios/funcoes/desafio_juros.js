//desafio de preço da aula de estruturas condifionais em forma de função

// 1 - a vista 10%
// 2 - pix 15%
// 3 -  credito 2x sem desconto
// 4 - credito 10x acréscimo 10%

const preco = 100
const pagamento = '3'

function aplicarDesc(valor, desconto) {
  return valor - (valor * desconto) / 100
}

function aplicarJuros(valor, juros) {
  return valor + (valor * juros) / 100
}

function main() {
  if (pagamento === '1') {
    console.log(aplicarDesc(preco, 10))
  } else if (pagamento === '2') {
    console.log(aplicarDesc(preco, 15))
  } else if (pagamento === '3') {
    console.log('duas parcelas de R$' + (aplicarDesc, preco / 2).toFixed(2))
  } else if (pagamento === '4') {
    console.log(
      'Nesta forma de pagamento terá um acréscimo de 10% no valor total do produta. Ficará em 3 parcelas de R$' +
        (aplicarJuros, preco / 3).toFixed(2)
    )
  } else {
    console.log('não aceitamos este método de pagamento')
  }
}
