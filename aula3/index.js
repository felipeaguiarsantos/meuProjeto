let variavelNumero = 10
let variavelTexto = 'Felipe'
let variavelBoleana= true
let variavelObjeto = {
    nome: 'Felipe', 
    idade: 29,
    masculino: true,
}

let variavelArray = [10, 20, 30]
let variavelIndefinida;
let variavelNull = null
let varialNan = '2' + 35

//Metodos Arrays
let nomeDosAlunosDaDH = ['Alvaro', 'Patrick']

nomeDosAlunosDaDH.push('Samuelson') //push adicionar mais um item ao fim do array

nomeDosAlunosDaDH.pop(); //Pop remove o ultimo item do array

const posicaoPatrick = nomeDosAlunosDaDH.indexOf('Patrick')

console.log(posicaoPatrick)

console.log(nomeDosAlunosDaDH[posicaoPatrick])

// Funções e Escopo

function imprimeResultadoDoArray() {
    //este é o inicio do escopo da funcao

    console.log(nomeDosAlunosDaDH)

    //este é o fim do escopo da funcao

}

function outraFuncao () {

    console.log(nomeDosAlunosDaDH)
}

imprimeResultadoDoArray()

outraFuncao()