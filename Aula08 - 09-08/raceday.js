/* 
    Atividade checkpoint: Functions
    Senai Nadir Dias de Figueiredo
    @author João Henrique Martins Genesio
    Data: 09/08/2023
*/

let raceNumber = Math.floor(Math.random() * 1000);
let horarioCedo = false;
let idade = 18;
if (horarioCedo == true && idade > 18) {
    raceNumber += 1000;
}
if (horarioCedo == true && idade > 18) {
    console.log(raceNumber)
} else if (idade > 18 && horarioCedo == false) {
    console.log('Você correrá às 11h00h, seu número é ' + raceNumber)
} else if (idade < 18) {
    console.log('Você correrá às 12h30, seu número é ' + raceNumber)
} else {
    console.log('Veja a mesa de registro')
}