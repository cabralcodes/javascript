//informações do lutador
let lutador ={
nome: 'Anderson da Silva',
nacionalidade: 'Brasil',
peso: 84.0,
altura:1.91
}
//escrevendo na tela
document.write(`Lutador: ${lutador.nome}<br>`)
document.write(`Nacionalidade: ${lutador.nacionalidade} <br>`)
document.write(`Peso: ${lutador.peso.toLocaleString('pt-BR',{style:"currency",currency:'BRL'})}<hr>`)

//frase do dia

let dia = 22
let mes = 1
let ano = 2025
let frase = "Um homem feliz está satisfeito demais com o presente para pensar demais no futuro"
let pensador = "Albert Einstein"
// escrevi a data e a frase
document.write(`${dia}/`)
document.write(`${mes}/`)
document.write(`${ano} <br>`)
document.write(`${frase}<br>`)
document.write(`${pensador}<hr>`)

let MesesDoAno = ['Janeiro', 'Fevereiro', 'Março...']
//meses
document.write(`Meses do Ano <br> ${MesesDoAno[0]},${MesesDoAno[1]}, ${MesesDoAno[2]}<hr>`)

//objeto do jogo 

let jogo = 'Call of Duty Mobile - Cod moba'
let dev = 'Activision'
let AnoLancamento = 2019

document.write(`Jogo: ${jogo} <br>`)
document.write(`Desenvolvido por: ${dev}<br>`)
document.write(`Ano do lançamento: ${AnoLancamento} <br>`)




