//Exer 1 -> TROCANDO VALORES DA VARIAVÉIS

let a = 'vermelho'
let b = 'azul'

let c = a
a = b
b = c

console.log(a)
console.log(b)

//NR

//02 - MAXIMO ENTRE DOIS VALORES
//ESCREVA UMA FUNÇÃO QUE USA 2 NUMEROS E ROTORNA O MAIOR VALOR ENTRE ELES
function max(numero1, numero2) {
  if (numero1 > numero2) {
    return numero1
  } else {
    return numero2
  }
}
max(10, 23)

console.log(max(34, 23))

//03.FIZZBUZ

//DIVISIVEL POR 3 => FIZZ
//DIVISIVEL POR 5 => BUZZ
//DIVISIVL POR 3 E 5 => FIZZBUZZ
//NÃO DIVISIVEL POR 3 E 5
//NÃO É UM NUMERO

const resultado = fizzBuzz(45)
console.log(resultado)

function fizzBuzz(entrada) {
  if (typeof entrada !== 'number') return 'Não é um numero'
  if (entrada % 3 === 0 && entrada % 5 === 0) {
    return 'FizzBuzz'
  } else if (entrada % 3 === 0) {
    return 'Fizz'
  } else if (entrada % 5 === 0) {
    return 'Buzz'
  } else {
    return 'Não é divisivel por 3 e 5'
  }
}

//EXER 4. MEDIDOR DE VELOCIDADE
//VEL 70 = OK
// A CADA 5 KILOMETROS ACIMA DO LIMITE UM PONTO A MAIS DA CARTEIRA
//Caso pontos maior que 12 carteira suspendida

function verificarVelocidade(velocidade) {
  const velocidadeMaxima = 70
  const kmPonto = 5
  if (velocidade <= velocidadeMaxima) console.log('ok')
  else {
    const pontos = Math.floor((velocidade - velocidadeMaxima) / kmPonto)
    if (pontos >= 12) console.log('Cateira Supensa')
    else console.log('Pontos', pontos)
  }
}
verificarVelocidade(84)
