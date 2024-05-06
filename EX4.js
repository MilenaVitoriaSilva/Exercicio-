
var lista_dos_nomes= ["milena", "jose", "adriano", "albert"];
var lista_dos_sobrenomes= ["vitoria", "antunes", "silva", "alex"];
var lista_das_cidades= ["blumenau", "gaspar", "joinville", "brusque"];
var lista_das_idades= [25, 22, 21, 30];
var lista_de_CPF= [09519, 0952, 0968, 0976];
var lista_de_contabancaria = [4000+5000+50000000+100000000]
var saldo =parseInt(prompt("digite seu saldo")); 


var mensagem0 = `Ola, ${lista_dos_nomes[0]}  ${lista_dos_sobrenomes[0]}! voce tem ${lista_das_idades[0]} anos e sua cidade é ${lista_das_cidades[0]}`
var mensagem1 = `Seja bem vinda a décima maratona de Blumenau, ${lista_dos_nomes[1]} ${lista_dos_sobrenomes[1]}.`
var mensagem2 =`Oi ${lista_dos_nomes[2]}.Você mora em ${lista_das_cidades[2]} e seu CPF é ${lista_de_CPF[2]}`
var mensagem3 = `${lista_dos_nomes[3]}, seja bem vinda.`

var media= lista_de_contabancaria / 5

console.log(lista_dos_nomes, lista_dos_sobrenomes, lista_das_cidades, lista_das_idades, lista_de_CPF, lista_de_contabancaria);
console.log (mensagem0);
console.log(mensagem1);
console.log(mensagem2);
console.log(mensagem3);
console.log (lista_de_contabancaria);
console.log (media);


if (saldo >=0, saldo <10000){ 
console.log("você é pobre")
}else if (saldo >=10100, saldo <70000){
    console.log("você é bem de vida")
}else if (saldo >=70000, saldo <500000){
    console.log("você é rico")
}else if (saldo >=5000000, saldo <10000000){
    console.log("você é milionário")
}else {
    console.log("você não tem um real")
}

