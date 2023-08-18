let matrizA = [
    [1,2],
    [3,4],
    [5,6]
];

let matrizB = [
    [7,8,9],
    [10,11,12]
];

//nesta linha estamos definindo as matrizes do exercício
let matrizResultado = [];

//agora devemos iniciar a matriz com zeros para que a operação de soma e multiplicação seja executada
for (let i = 0; i < matrizA.length; i++) {
    matrizResultado[i] = [];
    for (let j = 0; j < matrizB[0].length; j++) {
        matrizResultado[i][j] = 0;
    }
    //estamos iniciando a matriz resultante com zeros e atribuir zeros a cada elementos
};

//multiplicar a matriz
for (let i = 0; i < matrizA.length; i++) {
    for (let j = 0; j < matrizB[0].length; j++) {
        for (let k = 0; k < matrizB.length; k++) {
            matrizResultado[i][j] += matrizA[i][k] * matrizB[k][j];
        }
    }
}
for (let i = 0; i < matrizResultado.length; i++) {
    document.write(matrizResultado[i].join(" "));
    document.write(`<br>`);
}