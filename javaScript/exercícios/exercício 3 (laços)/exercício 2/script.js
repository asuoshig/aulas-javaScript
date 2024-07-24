 function contar(){
    var inicio = document.getElementById('inicioc')
    var fim = document.getElementById('fimc')
    var passo = document.getElementById('passoc')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] faltam dados!')
    } else {
        resultado.innerHTML = 'contando... '
        let ini = Number(inicio.value)
        let fi = Number(fim.value)
        let pas = Number(passo.value)

        for(let con = ini; con <= fi; con += pas){
            resultado.innerHTML += `${ con} \u{1F919} ` //inicode emoji list
        }
        resultado.innerHTML += `\u{1F3F3}`
    }

 }