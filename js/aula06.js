
// criar variaveis use let ou var
let produto = 'Aroz'
let quant = 2
let PrecoUnitario = 4.99
let PrecoTotal = quant * PrecoUnitario

document.write (` Preço Total R$ ${PrecoTotal}<br>`)
console.log(new Intl.NumberFormat('pt-br').format(PrecoTotal))



