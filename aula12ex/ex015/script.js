function carregar(){
let msg = document.getElementById('msg')
let img = document.getElementById('manhã')   
let data = new Date() 
let hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12){
    //bom dia
    img.src = 'manha.png'
    document.body.style.background = '#c2b388'
} else if (hora >= 12 && hora < 18) {
    //boa tarde
    img.src = 'tarde.png'
    document.body.style.background = '#d58b72'
} else {
    //boa noite
    img.src = 'noite.png'
    document.body.style.background = '#21393d'
}

}


