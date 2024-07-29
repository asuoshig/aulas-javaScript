let numero = document.getElementById('number')
let lista = document.getElementById('flista')
let resultado = document.getElementById('res')
let valores = []

//VERIFICAÇÕES
function aceito(n){
    if (Number(n) >= 1 && Number(n) <= 100){ // não aceita números maior que 100 nem menor que 1.
        return true
    }else{
        return false
    }
}

function naLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

//BOTÕES E FUNÇÕES DO PROGRAMA

function adicionar(){
    if(aceito(numero.value) && !naLista(numero.value, valores)){ // testa as verificaçoes
        valores.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `o valor ${numero.value} foi adicionado` 
        lista.appendChild(item)
        resultado.innerHTML = ''
    } else{
        window.alert('[ERRO] Número inválido ou ja adicionado.')
    }
    numero.value=''
    numero.focus() //limpa o input depois de digitar
}

function analizar(){
    if(valores.length == 0){
        window.alert('adicione valores para serem analizados.')
    }else{
        let total = valores.length // saber quantos elementos o vetor tem.
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let posicao in valores){
            soma += valores[posicao]
            if (valores[posicao] > maior)
                maior = valores[posicao]
            if(valores[posicao] < menor)
                menor = valores[posicao]
        }
        media = soma/total
        resultado.innerHTML = '' //zerar o valor
        resultado.innerHTML += `<p>Ao todo, temos ${total} números cadastrados. </p>`
        resultado.innerHTML += `<p>o maior valor adicionado foi ${maior}. </p>`
        resultado.innerHTML += `<p>o menor valor adicionado foi ${menor}. </p>`
        resultado.innerHTML += `<p>A soma dos números adicionados é: ${soma}. </p>`
        resultado.innerHTML += `<p>A média de todos os valores é: ${media}. </p>`
    }
}


