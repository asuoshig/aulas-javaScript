var hora = 0
console.log(`Agora são exatamente ${hora} horas.`)
if (hora >= 0 && hora <= 5) {
    console.log('boa madrugada')
}else if (hora >= 12 && hora < 18) {
    console.log('Boa tarde!')
}else if (hora <= 6 && hora < 12) {
    console.log('Bom dia!')
}else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite')
}

//se o boa madrugada estivesse por ultimo o resultado seria bom dia.
// ja que o codigo executa de cima para baixo.