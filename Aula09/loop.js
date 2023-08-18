const lugaresQueVisitei = ['Natal', 'João Pessoa', 'Salvador', 'Praia Grande', 'Santos', 'Irecê', 'Quixaba', 'Ubatuba', 'Aparecida do Norte'];
for(let i = 0; i < lugaresQueVisitei.length; i++) {
    console.log(`Eu já visitei ${lugaresQueVisitei[i]}.`);
};
const lugaresAmigo = ['Passa Quatro', 'Campos do Jordão', 'Ubatuba', 'Curitiba', 'Jaraguá'];
const lugaresComum = []
for (let i = 0; i < lugaresQueVisitei.length; i++) {
    for (let j = 0; j < lugaresAmigo.length; j++) {
        if (lugaresQueVisitei[i] === lugaresAmigo[j]){
            lugaresComum.push(lugaresQueVisitei[i])
        }
    }
};
console.log(`Eu e a Letícia visitamos em comum, ${lugaresComum}`)

const amigosFace = ['Giulia', 'Giullia', 'Letícia', 'Vitória'];
const amigoKaian = ['Luiz', 'Andre', 'Letícia', 'Giullia'];
const amigosEmComum = [];
for (let i = 0; i < amigosFace.length; i++) {
    for (let j = 0; j < amigoKaian.length; j++) {
        if (amigosFace[i] === amigoKaian[j]){
            amigosEmComum.push(amigosFace[i])
        }
    }
};
console.log(`Os dois tem ${amigosEmComum}, como amigos em comum`);

const numeroSecreto = 4;
let tentativas = 0;
for(let i = 0; i < 10; i++) {
    let palpiteAtual = parseInt(window.prompt('Digite o valor'));
   //laço de repetição !=
    if (palpiteAtual === numeroSecreto) {
        document.write(`Adivinhou era ${numeroSecreto}`)
        break
    } else {
        if (tentativas <= 5) {
            tentativas++;
            if(tentativas == 5){
                document.write(`Você passou das tentativas`);
                break;
            }
            
        }
    }
}