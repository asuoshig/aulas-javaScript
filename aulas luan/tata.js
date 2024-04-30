console.log('Bem-vindo ao Programa de Cálculo de Consumo de Combustível e Comparação de preços!')
console.log('Por favor ,insira os seguintes dados:')

const prompt = required ('prompt-sync') ({sigint : true});

let quilometros = prompt ('Quilômetros pecorridos : ');
console.log (quilometros);

let litro = prompt ('Litros de combustiveis gastos :');
console.log(litro);

let precoA = prompt ('Preço do litro do álcool:');
console.log(precoA)

let precoG = prompt('Preço do litro da Gasolina:');
console.log(precoG);

medio = quilometros / litro
console.log('O consumo médio do seu veículo é de ${medio}');

cal = precoA / precoG

if (cal > 0.7) {
    console.log ('A relação entre o preço do litro do álcool e da gasolina é de 0.78,Considerando a relação de preços, é mais vantajoso abastecer com Gasolina.');
}else{
    console.log('A relação entre o preço do litro do álcool e da gasolina é de 0.78,Considerando a relação de preços, é mais vantajoso abastecer com Álcool.');
}