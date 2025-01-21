/* Arquivo JS aula 05 objetos */

//CRIAR OBJETO
let pessoa = {
    nome : 'Matheus', 
    idade : 14,
    peso : 54.4,
    altura : 1.82,
    doador : false,
}

let produtos = {
    descricao : [],
    preco : [],
}

const CARROS = {
    marca : ['Ferrari', 'Lamborghini','Porsche'],
    modelo : ['Enzo', 'Aventador', 'GT3Rs 911'],
    ano : ['2003', '2015', '2020']
}


// como acessar uma propriedade usando . 
 /*
 pesoa.nome
 pessoa.altura
 pessoa.idade
 pesoa.doador
 */

 // ACESSAR PRIPRIEDADE usando ['']
 
 /*
 pessoa ['nome']
 pessoa ['idade']
 pessoa['peso']
 pessoa['altura']
 */

//OPERAÇÃO IMC = peso / (altura * altura)
let imc = pessoa.peso / (pessoa.altura * pessoa.altura)

//.toFixed(X)
// limita o número de casas decimais
console.log("IMC: " + imc.toFixed(2)) 

//ALTERAR/ATUALIZAR VALOR de propridade
pessoa.nome = "Matheus Augusto"
produtos.descricao = ['Arroz']
produtos.preco = ['4.99']

//spreed operator
produtos.descricao =  [...produtos.descricao, 'Feijão', 'Trigo']
produtos.preco = [...produtos.preco, 9.99, 4.79]


