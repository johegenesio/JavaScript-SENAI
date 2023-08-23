//atv 1 + desafio

const hobbies = ['jogar', 'comer', 'dormir', 'vôlear', 'cozinhar'];
hobbies.forEach(function(hobby) {
    console.log("Olá, eu sou o hobby " + hobby + "!");
});
//atv 2 + desafio

const bookTitles = hobbies.map(function(hobby) {
    return "O incrível mundo de " + hobby;
});
console.log(bookTitles);
const catalogos = ['O Que Tem na Geladeira?', 'Chef profissional', 'Básico: Enciclopédia de receitas do Brasil Livro'];
const myCatalogo = catalogos.map(function(title) {
    return "Meu catálogo tem: " + title;
})
console.log(myCatalogo)
//atv 3 + desafio

const dHobbies = hobbies.filter(function(hobby) {
    return hobby[0] === 'd';
});
const filterHobbies = hobbies.filter(function(hobby) {
    return hobby[0] === 'c';
});
console.log(dHobbies + ' ' + filterHobbies);
//atv 4 + desafio

const runningPosition = hobbies.findIndex(function(hobby) {
    return hobby === 'correr';
});
const comerPosition = hobbies.findIndex(function(hobby) {
    return hobby === 'comer';
});
console.log("Correr está na posição: " + runningPosition + " e " + "comer está na posição: " + comerPosition);
//atv 5 + desafio

const allHobbies = hobbies.reduce(function(accumulator, hobby) {
    return accumulator + " e " + hobby; },);
console.log("Meus hobbies são: " + allHobbies);
const juntosHobbies = hobbies.reduce(function(accumulator, hobby) {
    return accumulator + " e gosto de " + hobby; },);
console.log("Eu gosto de " + juntosHobbies);
//atv 5[2] + desafio

const hasVHobby = hobbies.some(function(hobby) {
    return hobby[0] === 'v'; 
});
console.log("Eu tenho um hobby que começa com 'v'? " + hasVHobby);
const maiorqoito = hobbies.some(function(hobby) {
    return hobby.length > 8;
})
console.log("Eu tenho um hobby maior que 8 letras? " + maiorqoito)
//atv 6 + desafio

const allShort = hobbies.every(function(hobby) { 
    return hobby.length < 15; 
});
console.log("Todos os meus hobbies têm menos de 15 letras? " + allShort);
const minusculo = hobbies.every(function(hobby) {
    return hobby === hobby.toLowerCase()
})
console.log('Meus hobbies começam com letra minúscula: ' + minusculo)
//atv 7 + desafio

const fiveLetterHobby = hobbies.find(function(hobby) {
    return hobby.length === 5; });
console.log("Meu primeiro hobby com 5 letras é: " + fiveLetterHobby);
const zLetra = hobbies.find(function(hobby){
    return hobby[0] === 'z';
})
console.log('Alguma palavra começa com z? ' + zLetra)
//atv 8 + desafio

const firstThreeHobbies = hobbies.slice(0, 3); 
console.log("Meus três primeiros hobbies são: ", firstThreeHobbies);
const segquaHobbies = hobbies.slice(2, 4); 
console.log("Meus três primeiros hobbies são: ", segquaHobbies);