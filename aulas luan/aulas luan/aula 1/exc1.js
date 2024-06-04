function num(a = 2, b = 13) {
   
    if (a > b) {
        console.log("O número maior é: ", a);
        return a;
    } else if (b > a) {
        console.log("O número maior é: ", b);
        return b;
    } else {
        console.log("Os números são iguais.");
        return a; 
    }
}
num();// chamar a função :)
