const ponteiroHoras = document.querySelector('.ponteiro-Horas');
const ponteiroMinutos = document.querySelector('.ponteiro-Minutos');
const ponteiroSegundos = document.querySelector('.ponteiro-Segundos');

const getTime = () => {
    const date = new Date();

    return {
        horas: date.getHours(),
        minutos: date.getMinutes(),
        segundos: date.getSeconds(),
    };
}

setInterval(() => {
    const { segundos, minutos, horas} = getTime();

    // Calculando os ângulos em graus
    const segundosAngulo = segundos * 6;
    const minutosAngulo = minutos * 6 + segundos / 10;
    const horasAngulo = (horas % 12) * 30 + minutos / 2;

    // Aplicando as transformações CSS
    ponteiroHoras.style.transform = `translate(-50%, -50%) rotate(${horasAngulo}deg)`;
    ponteiroMinutos.style.transform = `translate(-50%, -50%) rotate(${minutosAngulo}deg)`;
    ponteiroSegundos.style.transform = `translate(-50%, -50%) rotate(${segundosAngulo}deg)`;
}, 1000);

