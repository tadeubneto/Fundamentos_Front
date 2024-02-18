/* calcule o valor de um produto considerando o valor da etiqueta e a forma de pagamento

a visa debito 10% desc
dinheior ou pix 15% desc
2x sem juros sem desc
acima de 2x com 10% juros
*/

const valorProduto = 100;
const formaPagamento = 'Parcelado3';

if (formaPagamento === 'Débito'){
  console.log(valorProduto - (valorProduto*0.1))
} else if(formaPagamento === 'Dinheiro' || formaPagamento === 'Pix'){
  console.log(valorProduto - (valorProduto*0.15))
} else if (formaPagamento === 'ParceladoSJ'){
  console.log('duas parcelas de R$ ' + valorProduto/2)
} else if (formaPagamento === 'Parcelado3'){
  console.log('Nesta forma de pagamento terá um acréscimo de 10% no valor total do produta. Ficará em 3 parcelas de ' + (valorProduto*0.1 + valorProduto)/3)
} else {
  console.log('não aceitamos este método de pagamento')
}

