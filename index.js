var fs = require('fs');

const words = fs.readFileSync('wordlist.txt', 'ascii').split('\n');

function encodeIP(ip) {
    const regex = new RegExp('^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$');
    if(!regex.test(ip)) {
        throw new Error('Invalid IP address passed to encodeIP()');
    }
    
    const numbers = ip.split('.');
    
    let wordcombo = "";
    for(let i = 0; i < 4; i++) {
        wordcombo += words[numbers[i]];
        if(i != 3) {
            wordcombo += ' ';
        }
    }

    return wordcombo;
}

function decodeIP(wordcombo) {
    const regex = new RegExp('^([A-z]{2,}[ ]){3}[A-z]{2,}');
    if(!regex.test(wordcombo)) {
        throw new Error("Invalid word combination passed to decodeIP()");
    }

    const decodedWords = wordcombo.split(' ');

    let ip = "";

    for(let i = 0; i < 4; i++) {
        ip += words.indexOf(decodedWords[i]);
        if(i != 3) {
            ip += '.';
        }
    }

    return ip;
}
