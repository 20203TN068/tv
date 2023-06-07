let powerOn = false;
let silence = false;
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

powerButton.addEventListener('click', () => {
    powerOn = !powerOn;

    if (powerOn) {
        powerButton.innerText = 'Apagar';
        volumenButton.disabled = false;
        channelButton.disabled = false;
        moreVolumenLevelButton.disabled = false;
        lessVolumenLevelButton.disabled = false;
        moreChannelLevelButton.disabled = false;
        lessChannelLevelButton.disabled = false;
        silenceButton.disabled = false;
    } else {
        powerButton.innerText = 'Encender';
        volumenButton.disabled = true;
        channelButton.disabled = true;
        moreVolumenLevelButton.disabled = true;
        lessVolumenLevelButton.disabled = true;
        moreChannelLevelButton.disabled = true;
        lessChannelLevelButton.disabled = true;
        silenceButton.disabled = true;
        settings = {
            volumenLevel: 3,
            channelLevel: 7
        };
        updateButtons();
    }
});

moreVolumenLevelButton.addEventListener('click', () => {
    settings.volumenLevel= settings.volumenLevel < 10 ? settings.volumenLevel + 1 : 'Volumen al máximo';
    volumenLevel = settings.volumenLevel;
    updateButtons();
});

lessVolumenLevelButton.addEventListener('click',() => {
    settings.volumenLevel = settings.volumenLevel < 10 ? settings.volumenLevel - 1 : settings.volumenLevel;
    volumenLevel = settings.volumenLevel;
    updateButtons();
});

moreChannelLevelButton.addEventListener('click', () => {
    settings.channelLevel = settings.channelLevel < 100 ? settings.channelLevel + 1 : 'Canal al máximo';
    channelLevel = settings.channelLevel;
    updateButtons();
});

lessChannelLevelButton.addEventListener('click',() => {
    settings.channelLevel = settings.channelLevel < 100 ? settings.channelLevel - 1 : settings.channelLevel;
    channelLevel = settings.channelLevel;
    updateButtons();
});

silenceButton.addEventListener('click', () => {
    silence = !silence;

    if (silence) {
        silenceButton.innerText = 'Silencio';
        volumenButton.disabled = false;
        channelButton.disabled = false;
        moreVolumenLevelButton.disabled = false;
        lessVolumenLevelButton.disabled = false;
        moreChannelLevelButton.disabled = false;
        lessChannelLevelButton.disabled = false;
        silenceButton.disabled = true;
        silence = true;
        settings = {
            volumenLevel: settings.volumenLevel,
            channelLevel: settings.channelLevel
        }
        updateButtons();
    } else {
        silenceButton.innerText = 'Silencio';
        volumenButton.disabled = true;
        channelButton.disabled = true;
        moreVolumenLevelButton.disabled = true;
        lessVolumenLevelButton.disabled = true;
        moreChannelLevelButton.disabled = true;
        lessChannelLevelButton.disabled = true;
        silenceButton.disabled = true;
        silence = false;
        settings = {
            volumenLevel: 0,
            channelLevel: settings.channelLevel
        };
        updateButtons();
    }
});

