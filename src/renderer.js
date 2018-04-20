console.log('inside renderer', document.getElementById("idButton"));

const electron = require('electron');
const ipc = electron.ipcRenderer;

document.getElementById("idButton").addEventListener('click', function () {
    console.log("p0, clicked");
    ipc.send('countdown_start');
});

ipc.on('countdown', (evt, count) => {
    console.log('p4, show count');
    document.getElementById('count').innerHTML = count;
});