function calcular(){
    let numero = document.getElementById('number')
    let tab = document.getElementById('seltab')
    if (numero.value.length == 0){
        console.log('[ERRO] digite um número!')
    }else{
        let n = Number(numero.value)
        let c = 1
        tab.innerHTML = '' // limpa a tabuada antes de fazer a proxima
        while (c <= 10){
            let item = document.createElement('option')// cria uma option no select
            item.text = `${n} X ${c} = ${n*c}`
            tab.appendChild(item)
            c++ //incremento
        }
    }
}
