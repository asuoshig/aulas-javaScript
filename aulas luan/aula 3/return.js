function somar(a, b){
    const soma = a+b
    console.log('TO ANTES DO RETURN')

    if (soma > 3 ){ // o return é uma palavra exclusiva de uma função, este if só aceitou o return pq ele está numa função.
        return 'TO NO IF'
    }

    return soma
     console.log('TO DEPOIS DO RETURN')// este não funciona pois está depois do return
}

