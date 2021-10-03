// Objetos
    const pessoa = {
    nome: 'Alvaro',
    cpf: '123.156.546-86',
    idade: 26,
    casado: false,
    falar: function() {
        return 'Estou falando'
    }
}

//const umInteiro = 10 

const animal = {
    raca: 'cachorro',
    nome: 'code',
    peso: 20.5,
    cor: 'caramelo',
    comer: function() {
        console.log('Animal comendo')
    }
}

//console.log(animal.raca)

//animal.comer()

//JSON -> PRIMO POBRE
const informacoesEmJson = '{ "nome": "Alvaro", "idade": 26 }'

const jsonConvertido = JSON.parse(informacoesEmJson)

//console.log(jsonConvertido.nome)

//METODOS DE STRING 
const meuNome = 'Alvaro Ferreira'

//console.log(meuNome.indexOf('Ferreira') )

//console.log(meuNome[7])

//LOOPS E REPETICOES
//console.log(1)
//console.log(2)
//console.log(3)

//Loop que irá imprimir de 1 ao 10
for (i = 0; i <= 10; i++) {
    //Irá repetir 10x
    //console.log(i)
}

//IF TERNARIO
if ( 1 == 1) {
    console.log('Certo')
} else {
    console.log('Errado')
}

1 == 1 ? console.log('Certo') : console.log('Errado')

//ARROW FUNCTION
/* function nomedaFuncao () {
    console.log('Entrou na funcao')
}

nomedaFuncao()*/

const nomedaFuncao = (valor1, valor2) => {
    const soma = valor1 + valor2
    console.log(soma)
}

nomedaFuncao(10,10) 