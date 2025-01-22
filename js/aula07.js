/* Arquivo JS Aula 07 DOM */

//DOM = Dpcument Object Model
//Arvore com elementos desde o Browser, a janela do Browser, o Documento e cada elemento html que formar os conteudos.
/*
navigator
window
location
document -> head e body
history
*/

// PARA MANIPULAR O DOM PRECISAMOS
// indicar qual objeto usasr, depois chamar um método(função) para selecionar ele, seus dados,trazer informações, etc.

//querySelector()
//selecionar elemento com base na tag, #id ou .class
let titulo = document.querySelector('#titulo')
//console.log(titulo)

//.textContent
//propriedade ou atributo textContent
//serve para acessar ou alterar conteudo
//de um elemento que foi selecionado
//console.log(titulo.textContent)
//console.log(titulo.innerHTML)

titulo.textContent = "DOM"
//console.log(titulo.textContent)

//.querySelectorAll()
//selecionar todos elementos com base na tag, #id ou .class

/*
.getElementByTagName()
.getElementById()
.getElementByClassName()
*/

let TesteTag = document.getElementsByTagName('div')
//console.log(TesteTag)
//document.write(TesteTag[0].textContent)
//document.write(TesteTag[1].textContent)


let TesteId = document.getElementById('titulo')
//console.log(TesteId)

let TesteClass = document.getElementsByClassName('box')
//console.log(TesteClass)
//document.write(TesteClass[0].textContent)
//document.write(TesteClass[1].textContent)
