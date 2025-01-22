/*Arquivo JS aula 09 DOM + alterar CSS */

let titulo = document.querySelector('h1')
//titulo.textContent = 'Aula 09 Manipular CSS'
let imagem = document.querySelector('#foto')
imagem.setAttribute('src', '/images/Captura de tela 2024-11-08 151244.png')

/*MANIPULAR CSS */
titulo.style.color = "red";

let box = document.querySelectorAll('.box')
box[0].setAttribute('class', 'azul')
box[0].removeAttribute('class')

let tela = document.querySelector('main')

let BtnDark = document.querySelector('#btdark')

let BtnLight = document.querySelector('#btlight')

BtnDark.addEventListener('click', ModoDark)
BtnLight.addEventListener('click', ModoLight)

function ModoDark() {
    console.log('modo dark')
    tela.classList.add("dark");
    tela.classList.remove("light");
}

function ModoLight() {
    console.log('modo light')
    tela.classList.remove("dark");
    tela.classList.add("light");
}
