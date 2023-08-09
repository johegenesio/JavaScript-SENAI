let CMD = 'Ilusão';
let HEC = 'Controle de elementos';
let GRPM = 10;
let AEUP = 'Sim';
let DPE = 'Sim';
let DAC = 'Sim';

if (CMD === 'Fogo' && HEC === 'Controle de elementos') {
    console.log('Passou no teste');
} else if (CMD === 'Cura' && HEC === 'Feitiços de proteção') {
    console.log('Passou no teste');
} else if (CMD === 'Transformação' && GRPM >= 8) {
    console.log('Passou no teste');
} else if (CMD === 'Ilusão' && AEUP === 'Sim' && DPE === 'Sim') {
    console.log('Passou no teste');
} else {
    console.log('Não passou no teste');
}