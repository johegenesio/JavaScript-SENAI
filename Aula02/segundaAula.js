function media() {
    var tx_n1 = document.querySelector('input#inp_n1');
    var tx_n2 = document.querySelector('input#inp_n2');
    var tx_n3 = document.querySelector('input#inp_n3');
    var tx_n4 = document.querySelector('input#inp_n4');

    var res = document.querySelector('div.nota')

    var n1 = Number(tx_n1.value)
    var n2 = Number(tx_n2.value)
    var n3 = Number(tx_n3.value)
    var n4 = Number(tx_n4.value)
    media = (n1+n2+n3+n4)/4;

    if (media < 5) {
        res.innerHTML = (`Você foi Reprovado com média ${media}`);
    } else if (media >= 5 && media < 7) {
        res.innerHTML = (`Você foi Aprovado com desempenho Regular com média ${media}`);
    } else if (media >= 7 && media < 9) {
        res.innerHTML = (`Você foi Aprovado com desempenho Bom com média ${media}`);
    } else if (media >= 9 && media <= 10) {
        res.innerHTML = (`Você foi Aprovado com desempenho Execelente com média ${media}`);
    } else {
        res.innerHTML = (`Valor inválido`);
    }
}