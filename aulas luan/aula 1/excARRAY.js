function somar(array) { //A função sempre tem que ser verbo
    let soma = 0;
    for (i = 0; i < array.length; i++) {
        console.log(array[i]);
        soma += array[i]
    }
    return soma
}

let somarArray = [0, 12, 1, 7, 6, 11, 9]

let resultado = somar(somarArray)
console.log("a soma é: ", resultado)
