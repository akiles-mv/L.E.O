
const {Client} = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

// Mostrar el QR en la terminal

client.on('qr', (qr) => {
    qrcode.generate(qr,{small:true});
});