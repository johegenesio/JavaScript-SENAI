const kelvin = 293;
// criei uma variável const com nome de kelvin e atribui o valor de 293
let celsius = kelvin - 273;
// criei uma variável let com nome de celsius e atribui a uma subtração entre kelvin e 273
let fahrenheit = celsius * (9/5) + 32;
// criei uma variável let com nome de fahrenheit e atribui a fórmula celsius * (9/5) + 32
// atribui o Math com o .floor() para arredondar o valor
console.log(`A temperatura é ${Math.floor(fahrenheit)} graus Fahrenheit.`)
let newton = celsius * (33/100);
console.log(`A temperatura é ${Math.floor(newton)} em escala de Newton.`);