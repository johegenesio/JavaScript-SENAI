let maior = 0, menor = 0, valor;
for (let i=0; i<3; i++) {
    valor = parseInt(prompt('Digite o valor'));
    if (i == 0) {
        menor = valor;
        maior = valor;
    } else {
        if (valor < menor) {
            menor = valor;
        }
        if (valor > maior) {
            maior = valor;
        }
    }
    document.write(`O valor digitado foi ${valor}<br>`)
}
document.write(`O menor valor é ${menor} e o maior valor é ${maior}<br>`);

