let num = [1,4,5,8,9,3]
num[6]=2 // não temos a posiçao 7 no array, entao o js vai acrescentar ele.Porém se o array for até a casa 6 e a casa selecionada for 8, a casa 7 vai ficar vazia.
num.push(7)//acrescenta valores a última casa sem precisar saber quantos elementos tem no array.
num.sort() //ele vai pegar todos os elementos e colocar em ordem crescente.
console.log(num)
console.log(`a quantidade de elementos é: ${num.length}`) // num.length nao tem () pois length não é um método e sim um atributo. ele vai contar os elementos que temos dentro do array.
console.log(`a ordem crescente dos elementos é: ${num}`)
let posicao = num.indexOf(6) // vai buscar o valor entre () e mostrar a posição, se ele não encontrar ele restorna -1 que significa que o valor não foi encontrado.
if(posicao == -1){
    console.log('o valor buscado nao existe :(')
} else{
    console.log(`o valor buscado está na posição ${posicao}`)
}
