function calcular() {
    var velocidade = window.document.querySelector('input#txtvel')
    var res = window.document.querySelector('div#res')
    var vel = Number(velocidade.value)
    res.innerHTML = `<p> sua velocidade atual é de <strong> ${vel} km/h </strong></p>`
    if (vel > 60) {
        res.innerHTML += `<p>você ultrapassou o limite de velocidade permitido. MULTADO!!</p>`
    }
    res.innerHTML += `<p> dirija sempre com sinto de segurança!</p>`
}
