const fetch = require('node-fetch');
const dotenv = require('dotenv');

dotenv.config();

const TIME_INTERVAL = process.env.TIME_INTERVAL;
const WEBHOOK_URL = process.env.WEBHOOK_URL;

let requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        'text': 'Hi. It\'s time to drink some water',
    })
};

setInterval(async ()=>{
    try {
        await fetch(WEBHOOK_URL, requestOptions);    
    } catch (error) {
        console.log('Error in sending POST request', error);
    }
}, TIME_INTERVAL);