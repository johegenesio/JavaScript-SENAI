/* 
    Atividade checkpoint: Functions
    Senai Nadir Dias de Figueiredo
    @author João Henrique Martins Genesio
    Data: 09/08/2023
*/

//atvd1
let promocao = true;

//atvd3
promocao = false;

//atvd2 - 4
if (promocao==true){
    console.log('Hora de comprar!');
} else {
    console.log('A promoção acabou');
}

//atvd5
let nivelFome = 7;

//atvd6
if (nivelFome >= 7){
    console.log('Podemos comer mais tarde');
}

//atvd7
let nivelCancasso = 6;
let humor = 'sonolento';

if (humor == 'sonolento' && nivelCancasso > 8){
    console.log('Hora de dormir');
} else {
    console.log('Ainda não é hora de dormir.');
}

//atvd 08 -09 -10
let estacao = 'inverno';
if (estacao == 'inverno') {
    console.log('É inverno! Tudo está coberto de neve.');
} else if (estacao == 'outono') {
    console.log('É outono! As folhas estão caindo!');
} else if (estacao == 'verão') {
    console.log('É ensolarado e quente porque é verão!');
} else if (estacao == 'primaveira') {
    console.log('As flores est~çao nascendo, é primavera!')
} else {
    console.log('Inválido')
}

//Atividade 11
let posicaoFinalAtleta = 'primeiro lugar'

//Atividade 12
switch (posicaoFinalAtleta){
    case 'primeiro lugar':
        console.log('Você ganha a medalha de ouro!')
        break
    case 'segundo lugar':
        console.log('Você ganha medalha de prata!')
        break
    case 'terceiro lugar':
        console.log('Você ganha a medalha de bronze!')
        break
    default:
        console.log('Nenhuma medalha concedida.')
        break
}