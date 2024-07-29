function soma(n1=0, n2=0){ // o parametro recebendo zero significa um parametro pré definido, se na chamada for chamado somente 1 valor ele automaticamente reconhece o zero como um segundo valor. se nao houver o parametro recebendo zero e for chamada somente um valor o js irá retornar NaN. 
    return n1 + n2
}

console.log(soma(5, 7)) 