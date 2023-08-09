/* 
    Atividade checkpoint: Functions
    Senai Nadir Dias de Figueiredo
    @author João Henrique Martins Genesio
    Data: 09/08/2023
*/

//atvd 1 - 2
function mostrarLembrete() {
    console.log('Water the plants');
}

//atvd 3 - 4
function saudacaoEmEspanhol() {
    console.log('Buenas tardes.');
}

//atvd 5
function agradecerCliente() {
    console.log('Thanks you for your purchase! We appreciate your business.');
}

//atvd 6
agradecerCliente();

//atvd 7 
agradecerCliente();
agradecerCliente();
agradecerCliente();

//atvd 8 - 9
function agradecerCliente(nome='João') {
    console.log('Thank you for your purchase, ' + nome + '! We appreciate your business.');
}

//atvd 10
agradecerCliente('Cole');

//atvd 11
function criarListaDeCompras(item1 = 'Leite', item2 = 'pão', item3 = 'ovos'){
    console.log(item1 + item2 + item3);
}
criarListaDeCompras();

//atvd 12
function contarMonitores(linhas, colunas){
    return linhas * colunas   
}
const numeroDeMonitores = contarMonitores(5, 4);
console.log(numeroDeMonitores);

function custosDosMonitores(linhas, colunas){
    return (linhas * colunas) * 200
}
const custoTotal = custosDosMonitores(5, 4);
console.log(custoTotal);

const plantaPrecisaDeAgua = dia => {
    if (dia === 'Wednesday') {
        return true
    } else {
        return false
    }   
}
console.log(plantaPrecisaDeAgua("Tuesday"));