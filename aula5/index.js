//variavel de controle, condição, incremento (ação)
// for(let i=0; i<=9;i++){
//     console.log('entrou' + i)
// }

// function nomeFuncao(parametro1, parametro2) {
//     console.log(parametro1 + parametro2)
// }

// nomeFuncao('Ola' + 'Mundo')

//Função acima, mas com arrow funcion
// let nomeFuncao = (parametro1, parametro2) => {
//     console.log(parametro1 + parametro2)
// }

// nomeFuncao('Ola', 'Mundo')

// let pegaNome = (nome) => {
//     return nome
// }

// let saudar = (nome, callback) => {
//     const saudacao = 'Olá ' + callback(nome)
//     return saudacao
// }

// const resultado =  saudar('Felipe ', pegaNome)

// console.log(resultado)

//METODOS DE ARRAY 
let nomes = ['Felipe', 'Patricia', 'Marcelo', 'Patrick'] 

// let novoArray = nomes.map( (nome) => {
//     return 'Olá ' + nome
// })

// console.log(novoArray)

// for (nome of nomes) {
//     console.log(nome)
// }

//DATE
const dataAgora = new Date();

console.log(dataAgora.getDate())

