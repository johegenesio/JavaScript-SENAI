const hobbies = ['jogar', 'comer', 'dormir'];
console.log(hobbies);
console.log(hobbies[0]);
console.log(hobbies[1]);
console.log(hobbies[2]);
hobbies[0] = 'ler livros';
console.log(hobbies);
console.log(hobbies.length);
hobbies.push('cozinhar');
console.log(hobbies);
hobbies.pop();
console.log(hobbies);
let posicao = hobbies.indexOf('comer');
console.log(posicao);
hobbies.splice(posicao, 1)
console.log(hobbies);
const hobbiesAmigo = ['jogar vôlei', 'cantar', 'comer'];
const TodosHobbies = hobbies.concat(hobbiesAmigo);
console.log(TodosHobbies);
const categoriaVida = ['comer', 'dormir'];
const categoriaMusic = ['cantar'];
const categoriaTL = ['jogar vôlei', 'ler livros'];
const categoriasDeHobbies = [categoriaVida, categoriaMusic, categoriaTL];
console.log(categoriasDeHobbies[0][0]);
console.log(categoriasDeHobbies[2][1]);