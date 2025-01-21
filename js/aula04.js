/* Arquivo JS aula 04 Array */

let produtos = ['Arroz', 'Feijão', 'Leite'] 
var codigos = Array (10, 20, 30) // essa forma de array já fi muito utilizada , mas hoje não se utiliza mais.
var test = Array(10)
test [0] = "Oi"
test [9] = "Tudo bem?"
test [10] = "opa!"
let meses = ['Jan', 'Fev', 'Mar', 'Abr']
meses[0] = "Janeiro"

//ADICIONAR no final push = empurre

produtos.push('Açúcar')
codigos.push(40, 50, 60, 70, 80)
meses.push('Mai', 'Jun', 'Ago', '07')

// REMOVER o final pop = estourar
produtos.pop()
meses.pop()
meses.pop()
codigos.pop()
codigos.pop()


// ADICIONAR no inicio unsift
produtos.unshift( 'Uva', 'Maçã')
codigos.unshift(1, 2)
//REMOVER do inicio shift
produtos.shift()
produtos.shift()
codigos.shift()
codigos.shift()

//REMOVER  de uma posicao especifica splice
// spplice = emendar
// posicao inicial, quantos remover
codigos.splice(1, 3)

//COPIAR array slice = fatiar porção
// posicao inicial, quantos copiar
let meses1 = meses.slice()
let meses2 = meses.slice(0,3)


meses2.push('Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Oout', 'Nov', 'Dez')

//VER TAMANHO DO ARRAY length comprimento
//meses.length
//meses1.length
//meses2.length

//spreed operator...
let teste = [... produtos, 'Ovo','Pera']
