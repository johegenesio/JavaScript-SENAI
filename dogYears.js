//Armazena a idade em anos humanos
let myAge = 17;
let earlyYears = 2;
//Esses são os dois primeiros anos da vida de um cão, que contam mais do que os anos subsequentes.
earlyYears = earlyYears * 10.5;

//laterYears equivaler ao earlyYears, em relação a myAge
let laterYears = myAge - 2;

//está multiplicando o valor de laterYears vezes 4
laterYears = laterYears * 4;

console.log(earlyYears);
console.log(laterYears)

//anos de cão
let myAgeInDogYears = earlyYears + laterYears;

//linha de código está convertendo seu nome para letras minúsculas.
let myName = 'João'.toLowerCase()

//está  imprimindo a mensagem no console
console.log(`Meu nome é ${myName}. Tenho ${myAge} anos em anos humanos, que são ${myAgeInDogYears} anos em anos de cão.`)