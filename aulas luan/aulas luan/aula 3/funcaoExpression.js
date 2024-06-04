//Utilizando-se das expressões de função, faça um programa que calcule a area de um circulo (Dica: const pi = Math.PI)

const PI = Math.PI
const area = function (PI, raio){
    return PI * (raio**2)
}

console.log(area(PI, 2))