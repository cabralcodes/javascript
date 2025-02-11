function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    if (fano.value.trim() === "" || Number(fano.value) <= 0 || fano.value > ano){
        alert('Verifique os dados e tente novamente')
    } else {
        let fsex = document.getElementsByName('radsex')
    let idade = ano - Number(fano.value)
    let genero = ''
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')    
    if (fsex[0].checked){
        genero = 'Homem'
        if (idade >= 0 && idade <=10){
           //criança 
           img.setAttribute ('src', 'bbhomem.png')
        } else if ( idade < 21 ){
            //jovem
            img.setAttribute('src', 'jvhomem.png')
        }else if (idade < 50){
            //adulto
            img.setAttribute('src', 'adlthomem.png')
        }else if (idade > 60) {
            //idoso
            img.setAttribute('src', 'veihomem.png')
        }
    } else if ( fsex[1].checked){
        genero = 'Mulher'
        if (idade >= 0 && idade <=10){
            //criança 
            img.setAttribute ('src', 'bbmulher.png')
         } else if ( idade < 21){
             //jovem
             img.setAttribute('src', 'jvmulher.png')
         }else if (idade < 50){
             //adulto
             img.setAttribute('src', 'adltmulher.png')
         }else if (idade > 60) {
             //idoso
             img.setAttribute('src', 'veimulher.png')
         }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com a idade de ${idade}`
    res.appendChild(img)
}   }

