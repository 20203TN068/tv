let powerOn = false;
let silence = false;
let volumenAnterior = 0;
let settings = {
    volumenLevel: 0,
    channelLevel: 0
};


const powerButton = document.getElementById('power');
const volumenButton = document.getElementById('volumen-level');
const channelButton = document.getElementById('channel-level');
const moreVolumenLevelButton = document.getElementById('more-volumen');
const lessVolumenLevelButton = document.getElementById('less-volumen');
const moreChannelLevelButton = document.getElementById('more-channel');
const lessChannelLevelButton = document.getElementById('less-channel');
const silenceButton = document.getElementById('silence');

function updateButtons() {
    volumenButton.innerText = `Volumen: ${settings.volumenLevel}`;
    channelButton.innerText = `Canal: ${settings.channelLevel}`;
}

function printStatus() {
    console.log(`Encendido: ${powerOn}`);
    console.log(`Volumen: ${settings.volumenLevel}`);
    console.log(`Canal: ${settings.channelLevel}`);
    console.log(`Silencio: ${silence}`);
}

powerButton.addEventListener('click', () => {
    powerOn = !powerOn;

    if (powerOn) {
        powerButton.innerText = 'Apagar';
        settings = {
            volumenLevel: 3,
            channelLevel: 7
        };
    } else {
        powerButton.innerText = 'Encender';
        settings = {
            volumenLevel: 0,
            channelLevel: 0
        };
    }
    updateButtons();
    printStatus();
});

moreVolumenLevelButton.addEventListener('click', () => {
    if(powerOn && !silence && settings.volumenLevel < 10) {
        settings.volumenLevel += 1;
        console.log(`Volumen aumentado a: ${settings.volumenLevel}`);
    } else {
        console.log('No se puede aumentar el volumen');
    }
    updateButtons();
    printStatus();
});

lessVolumenLevelButton.addEventListener('click',() => {
    if(powerOn && !silence && settings.volumenLevel > 1) {
        settings.volumenLevel -= 1;
        console.log(`Volumen disminuido a: ${settings.volumenLevel}`);
    } else {
        console.log('No se puede disminuir el volumen');
    }
    updateButtons();
    printStatus();
});

moreChannelLevelButton.addEventListener('click', () => {
    if(powerOn && settings.channelLevel < 100) {
        settings.channelLevel += 1;
        console.log(`Canal aumentado a: ${settings.channelLevel}`);
    } else {
        console.log('No se puede aumentar el canal');
    }
    updateButtons();
    printStatus();
});

lessChannelLevelButton.addEventListener('click',() => {
    if(powerOn && settings.channelLevel > 1) {
        settings.channelLevel -= 1;
        console.log(`Canal disminuido a: ${settings.channelLevel}`);
    } else {
        console.log('No se puede disminuir el canal');
    }
    updateButtons();
    printStatus();
});

silenceButton.addEventListener('click', () => {
     if (powerOn) {
        silence = !silence;
        if (silence) {
            volumenAnterior = settings.volumenLevel;
            settings.volumenLevel = 0;
            console.log('Silencio activado');
        } else {
            settings.volumenLevel = volumenAnterior; 
            console.log('Silencio desactivado');
        }
    } else {
        console.log('Televisor apagado');
    }
        updateButtons();
        printStatus();
});

