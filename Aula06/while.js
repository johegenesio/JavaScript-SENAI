document.write('Ingridientes<br>')
let maior = 0, menor = 0, valor;
for (let i=0; i<3; i++) {
    valor = parseInt(prompt('Digite o peso do ingrediente mágico em gramas'));
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
    document.write(`Ingredientes: ${valor}<br>`)
}
document.write(`O menor valor é ${menor} e o maior valor é ${maior}<br>`);