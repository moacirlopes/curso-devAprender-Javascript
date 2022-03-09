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
