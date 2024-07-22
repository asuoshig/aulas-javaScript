function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formularioAno = document.getElementById('txtano')
    var resultado = document.getElementById('resultado')

    if (formularioAno.value.length == 0 || formularioAno.value > ano){ //checa se a caixa ta vazia e se o ano é maior que o atual.
        window.alert('[ERRO] idade inválida')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formularioAno.value)
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            genero = 'masculino'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'image/homemCrianca.jpg')
                img.style.width = '200px'
                img.style.height = '200px'
                img.style.borderRadius = '100px'
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'image/jovemHomem.jpg')
                img.style.width = '200px'
                img.style.height = '200px'
                img.style.borderRadius = '100px'
            } else if (idade < 50){
                // adulto
                img.setAttribute('src', 'image/adultoHomem.jpg')
                img.style.width = '200px'
                img.style.height = '200px'
                img.style.borderRadius = '100px'
            } else {
                //idoso
                img.setAttribute('src', 'image/idosoHomem.jpg')
                img.style.width = '200px'
                img.style.height = '200px'
                img.style.borderRadius = '100px'
            }
        } else if (fsex[1].checked) {
            genero = 'feminino'
            if (idade >= 0 && idade < 10){
                //crinaça
                img.setAttribute('src', 'image/mulherCrianca.jpg')
                img.style.width = '200px'
                img.style.height = '200px'
                img.style.borderRadius = '100px'
                
            } else if (idade < 28){
                //jovem
                img.setAttribute('src', 'image/jovemMulher.jpg')
                img.style.width = '200px'
                img.style.height = '200px'
                img.style.borderRadius = '100px'
            } else if (idade < 50){
                // adulto
                img.setAttribute('src', 'image/mulherAdulta.jpg')
                img.style.width = '200px'
                img.style.height = '200px'
                img.style.borderRadius = '100px'
            } else {
                //idoso
                img.setAttribute('src', 'image/idosoMulher.jpg')
                img.style.width = '200px'
                img.style.height = '200px'
                img.style.borderRadius = '100px'
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `seu gênero é ${genero} e você tem ${idade} anos.`
        resultado.appendChild(img)
    }
}