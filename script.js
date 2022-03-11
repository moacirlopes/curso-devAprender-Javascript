//Variaveis recebem valores e podem ser usado em outro lugar do seu programa
// let -> pode reatribuir o valor
// const -> não pode reatribuir o valor ; valor fixo

//Tipos Primitivos
//2 Tipos de valores primitivos:
//Referencias
//Valores

//Tipos de Valores
//string - > varias letras em umas palavras
// let nome = 'rafael' - string literal

//number -> atribui valor numeral
// let idade = 25 -  number literal

//boolean -> valor true ou false
//let estaAprovado = true
//let estaAprovado = false

//undefined -> valor indefinido
// let sobreno = undefined

// null -> resetar um valor
//let corSelecionado = null

//Tipagem dinamica -> Javascript é dinamico e pode ser alterado a qualquer momento
// let nome = 'neymar'
// console.log(typeof nome)

//Tipos de Referencias

//Objetos , Arrays e Functions

// let nome = 'junior'
// let idade = 19
// let estaAprovado = true
// let sobrenome = undefined

// let pessoa = {
//   nome: 'junior',
//   idade: 19,
//   estaAprovado: true,
//   sobrenome: undefined,
//   timefavorito: 'Corinthias'
// }

// console.log(pessoa.nome)
// console.log(pessoa.timefavorito)

//Arrays
//Um conjunto de dados

// let arreys = [pessoa, ' neymar ']
// console.log(arreys[0])
// console.log(arreys.length)
// let colega = ['joao', 20, 'palmeiras']
// console.log(colega)

//Functions
//nomear função verbo + substantivo
//Parametros variaveis de uma função

// let corSite = 'azul'
// function resetaCor(cor, tonalidade) {
//   corSite = cor + tonalidade
// }

// console.log(corSite)
// resetaCor('verde', ' escuro')
// console.log(corSite)

// let timeFavorito = 'santos'

// function alterarTime(time) {
//   timeFavorito = time
// }

// console.log(timeFavorito)
// alterarTime('coringão')
// console.log(timeFavorito)

//Tipos de Funçoes ( São duas)

//1 - Realiza uma tarefa e não devolve nada
function dizerNome() {
  console.log('jhony')
}
dizerNome()

//2 - Realiza uma tarefa e devolve algo

function multiplicarPorDois(valor) {
  return valor * 2
}

// console.log(multiplicarPorDois(6))

let resultado = multiplicarPorDois(12323690)

console.log(resultado)

//Operadores

//Operadores Aritimetricos(matematicos)
//Operadores Atribuição
//Operadores de Igualdade
//Operados de comparação
//Operadores Logicos
//Operadores Bitwise

//Operadores Aritimetricos(matematicos)
let salario = 100

// + , - , * , / , **

console.log(salario + salario + ' adição')
console.log(salario - salario + ' subtração')
console.log(salario * salario + ' multiplicação')
console.log(salario / salario + ' divisão')
console.log(6 ** 6 + ' exponencial')

// ++ -- operadores de incremento e decremento

let idade = 18
console.log(idade++)
console.log(idade)

console.log(idade--)
console.log(idade)

//Operadores de Atribuição

let valorTeclado = 100
valorTeclado *= valorTeclado
console.log(valorTeclado)

//Operadores de igualdade
//Igualdade escrita
// === compara valor e tipo

console.log(1 === 1)
console.log('1' === 1)

//Igualdade solta
// == compara apenas o valor

console.log(1 == 1)
console.log('1' == 1)

//Operador Ternario
//Ter mais de 100 pontos premium, comum
let pontos = 100
let tipo = pontos > 100 ? 'premium' : 'commun'
console.log(tipo)

//Operadores Lógicos
//e (&&)
//Retorna true caso os dois operando forem true

console.log(true && true)
console.log(true && false)

// let maiorDeIdade = true
// let possuircarteira = true
// let podeAplica = maiorDeIdade && possuircarteira

// console.log(podeAplica)

//or ||
//Retorna true se um dos operando forem true
let maiorDeIdade = false
let possuircarteira = false
let podeAplica = maiorDeIdade || possuircarteira

console.log('João pode aplicar?', podeAplica)

//not (!)
//negação
//negar

let candidatoRecusado = !podeAplica
console.log('João é um candidato recusado?', candidatoRecusado)

//Comparação logica com valores não booleanos

//valores falsy
//undefined
//null
//0
//false
//'' string vazia (espaço conta,como se tivesse uma letra ali)
//NaN - not a number

//valores Truthy
//true
//qualquer numero difente de 0
// 'string com palavra'

console.log(true || 1)

//if..Else

//Se a hora estiver entre as 6 horas até 12 : Bom dia
//Se a hora estiver entre 12:00 até 18:00 : Boa tarde
//Caso contrário : Boa noite

let hora = 13

if (hora >= 6 && hora <= 12) {
  console.log('Bom dia')
} else if (hora > 12 && hora <= 18) {
  console.log('Boa Tarde')
} else {
  console.log('Boa Noite')
}

//Switch Case
let permissao = 'diretor' // commun , gerente ,diretor

switch (permissao) {
  case 'commun':
    console.log('Usuario commun')
    break

  case 'gerente':
    console.log('Usuario gerente')
    break

  case 'diretor':
    console.log('Usuario diretor')
    break

  default:
    console.log('Não há permissão')
    break
}
