//Crie uma expressão de função que calcule corretamente a idade de uma pessoa dada a data de aniversario sendo a string "dd/MM/yyyy" (d=dia com 2 digitos, M=mês com 2 digitos, y=ano com 4 digitos)

const idade = function(data){
    const hoje = new Date();

console.log(`O dia de hoje é ${hoje.getDate()}`)
console.log(`O mês é ${hoje.getMonth()}`)
console.log(`E o ano é ${hoje.getFullYear()}`)

const [dia, mes, ano] = data.split("/")

let idade = hoje.getFullYear() - parseInt(ano)

if(hoje.getMonth()< (parseInt(mes) - 1)){
    return idade - 1
}else if (hoje.getMonth() === (parseInt(mes) -1)){
    if (hoje.getDate() < parseInt(dia)){
        return idade -1
}

    }
    return idade;

}
console.log(idade('23/02/2005'));

    