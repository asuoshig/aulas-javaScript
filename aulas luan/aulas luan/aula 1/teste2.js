function soma(a, b){
    console.log(`O valor de a é ${a}`)//é executado
    return a + b;
    console.log(`O valor de b é ${b}`)// não é executado
}

let resultado = soma(3, 5);
console.log(resultado); // saída 8