const nome = 'João';
function getEventoAleatorio(){
    let n = Math.floor(Math.random() * 2);
    if (n == 0) {
        return 'Maratona';
    } else if (n == 1) {
        return 'Triathlon';
    } else if (n == 2) {
        return 'Pentathlon';
    }
}
let treino = getEventoAleatorio();
function getDiasTreino(treino) {
    if (treino === 'Maratona') {
        return '50 dias'
    } else if (treino === 'Triathlon') {
        return '100 dias'
    } else if (treino === 'Pentathlon') {
        return '200 dias'
    }
}
let dias = getDiasTreino(treino);
function logEvento (nome, treino) {
    console.log(`O ${nome}, vai participar da ${treino}`);
}
function logTempo(nome, dias) {
    console.log(`O ${nome} e vai se prepatar por ${dias}`);
}
logEvento(nome, treino)
logTempo(nome, dias)