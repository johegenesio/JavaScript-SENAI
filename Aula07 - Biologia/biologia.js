let organela = prompt('Qual célula/organela você quer saber a função?').toLowerCase();

let celulaAnimal = ['núcleo', 'membrana nuclear', 'citoplasma', 'ribossomos', 'lisossomos', 'complexo de golgi', 'retículo endoplasmático liso', 'retículo endoplasmático rugoso', 'centríolo', 'citoesqueleto', 'membrana plasmática', 'dna', 'cromossomos', 'mitocôndria', 'peroxissomos'];

for (let i = 0; i < celulaAnimal.length; i++) {
    if (celulaAnimal[i] == 'núcleo' && organela == 'núcleo') {
        document.write(`O núcleo é uma dupla membrana, que comporta o DNA. <br>
        <img src="imagens/nucleo.jpg">`);
    } else if (celulaAnimal[i] == 'membrana nuclear' && organela == 'membrana nuclear') {
        document.write(`Regular o movimento de entrada e saída de substâncias numa célula especialmente entre o núcleo e o citoplasma. <br>
        <img src="imagens/Envoltura-nuclear.jpg" style="width:95vw;">`);
    } else if (celulaAnimal[i] == 'citoplasma' && organela == 'citoplasma') {
        document.write(`Armazenar substâncias químicas fundamentais para a manutenção da vida. <br>
        <img src="imagens/citoplasma.jpg">`);
    } else if (celulaAnimal[i] == 'ribossomos' && organela == 'ribossomos') {
        document.write(`Auxiliar na produção e na síntese das proteínas nas células. <br>
        <img src="imagens/ribossomo.jpg">`);
    } else if (celulaAnimal[i] == 'lisossomos' && organela == 'lisossomos') {
        document.write(`Os lisossomos participam do processo de digestão intracelular. <br> 
        <img src="imagens/lisossomos.jpg">`);
    } else if (celulaAnimal[i] == 'complexo de golgi' && organela == 'complexo de golgi') {
        document.write(`O armazenamento, transformação e exportação das substâncias das células. <br>
        <img src="imagens/complexo-de-golgi.jpg">`);
    } else if (celulaAnimal[i] == 'retículo endoplasmático liso' && organela == 'retículo endoplasmático liso') {
        document.write(`Participar da produção lipídios (gordura), especialmente os fosfolipídios, que compõem a membrana plasmática. <br>
        <img src="imagens/Reticulo-Endoplasmatico.png">`);
    } else if (celulaAnimal[i] == 'retículo endoplasmático rugoso' && organela == 'retículo endoplasmático rugoso') {
        document.write(`O retículo endoplasmático rugoso atua na glicosilação das glicoproteínas, na produção de fosfolipídios e na montagem de proteínas. <br>
        <img src="imagens/Reticulo-Endoplasmatico.png">`);
    } else if (celulaAnimal[i] == 'centríolo' && organela == 'centríolo') {
        document.write(`Auxiliam na divisão celular (mitose e meiose). <br>
        <img src="imagens/centriolo.jpg">`);
    } else if (celulaAnimal[i] == 'citoesqueleto' && organela == 'citoesqueleto') {
        document.write(`Garante a manutenção do formato da célula, participa do seu processo de divisão e permite a sua movimentação. <br>
        <img src="imagens/citoesqueleto.jpg" style="width:95vw;">`);
    } else if (celulaAnimal[i] == 'membrana plasmática' && organela == 'membrana plasmática') {
        document.write(`Controla as substâncias que entram e saem da célula. <br>
        <img src="imagens/membrana-plasmatica.jpg" style="width:95vw;">`)
    } else if (celulaAnimal[i] == 'dna' && organela == 'dna') {
        document.write(`Armazenar e transmitir as informações genéticas. Funcionar como molde para a síntese da molécula de RNA. <br>
        <img src="imagens/dna.png">`);
    } else if (celulaAnimal[i] == 'cromossomos' && organela == 'cromossomos') {
        document.write(`Estruturas que abrigam o material genético dentro da célula. <br>
        <img src="imagens/cromossomos.jpg">`);
    } else if (celulaAnimal[i] == 'mitocôndria' && organela == 'mitocôndria') {
        document.write(`Produzir a maior parte da energia necessária para o funcionamento celular através da respiração celular. <br>
        <img src="imagens/mitocondria.jpg">`);
    } else if (celulaAnimal[i] == 'peroxissomos' && organela == 'peroxissomos') {
        document.write(`Fazer a desintoxicação das células e principalmente realizar a catalisação do peróxido de hidrogênio. <br>
        <img src="imagens/peroxissomos.jpg">`);
    }
}