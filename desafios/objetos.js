/* objeto é uma coleção dinamica de chaves e valores. Ele agrupa valores. Funciona através de chave e valor

ex: const tadeu = {
  nome: 'tadeu';
  idade: 34;
}

objeto literal é criado sem precisar de classe

é possivel add ou remover valores dentro de um objeto

this assume o contexto do objeto

variaveis dentro de um objeto são chamadas de atributo

classe é a definição (como o objeto deve ser), instancia é a ocorrencia 

o nome da CLASSE sempre vai começar com letra maiúscula

aqui estudamos sobre orientação de objetos 
*/

class Carro {
  marca
  cor
  consumoPorkm
  constructor(marca, cor, consumoPorkm) {
    this.marca = marca
    this.cor = cor
    this.consumoPorkm = consumoPorkm
  }
  calcularGastoEmReal(preco, distancia) {
    return distancia * this.consumoPorkm * preco
  }
}

const renegade = new Carro('Jeep', 'Branco', 1 / 8)
//console.log(renegade.calcularGastoEmReal(5, 73))

const compass = new Carro('Jeep', 'Preto', 1 / 11.5)
//console.log(compass.calcularGastoEmReal(5.65, 210))

class Pessoa {
  nome
  peso
  altura
  constructor(nome, peso, altura) {
    this.nome = nome
    this.peso = peso
    this.altura = altura
  }

  calcImc() {
    return this.peso / (this.altura * this.altura)
  }

  classifiqueImc() {
    const imc = this.calcImc()
    if (imc < 18.5) {
      return 'Abaixo do peso'
    } else if (imc >= 18.5 && imc <= 25) {
      return 'peso normal'
    } else if (imc > 25 && imc <= 30) {
      return 'acima do peso'
    } else if (imc > 30 && imc <= 40) {
      return 'Obeso'
    } else {
      return 'Obesidade Grave'
    }
  }
}

const tadeu = new Pessoa('Tadeu', 72, 1.64)
console.log(tadeu.calcImc())
console.log(tadeu.classifiqueImc())

const dani = new Pessoa('Dani', 59, 1.59)
console.log(dani.calcImc())
console.log(dani.classifiqueImc())


