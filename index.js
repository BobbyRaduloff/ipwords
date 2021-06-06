#!/usr/bin/env node

const fs = require('fs');
const yargs = require("yargs");

const words = ["that","tennis","tube","dad","string","famous","piece","your","dark","though","wonder","got","power","poem","north","noon","with","would","body","went","live","wife","forward","wrong","move","young","measure","match","melody","way","cut","wear","fraction","at","product","atom","hope","half","fresh","clean","begin","question","on","month","meat","noise","bell","ease","exact","base","sugar","history","include","most","dollar","depend","wire","food","edge","check","thin","wind","quotient","separate","star","class","buy","point","afraid","vowel","mean","nothing","want","every","toward","blow","death","success","lost","wish","shell","effect","liquid","surface","here","read","cross","real","brother","coat","team","allow","lie","cool","top","loud","break","system","ear","come","major","they","problem","burn","skill","shape","behind","window","connect","self","sign","does","saw","minute","high","direct","girl","fruit","least","friend","took","fast","lot","spot","name","four","unit","character","boat","expect","first","shore","often","build","steel","final","thought","cause","wait","band","quiet","develop","speed","yellow","period","sentence","tie","slave","thing","very","solution","grow","new","consonant","camp","box","ask","late","head","only","tool","hot","general","you","create","then","gas","throw","true","just","segment","rub","condition","dress","broke","pick","truck","possible","bottom","molecule","particular","subtract","bring","correct","simple","once","bank","anger","sight","map","sudden","soldier","not","turn","iron","gather","yes","sound","dead","front","lady","play","sent","beauty","village","born","engine","mind","sat","imagine","those","syllable","catch","prepare","plane","favor","raise","reach","family","pretty","cover","fly","beat","free","any","list","paragraph","round","port","cotton","value","picture","week","soft","sense","spring","nine","wide","ring","language","pay","method","drink","finish","original","row","usual","get","electric","group","been","an","seven","happy","egg","record"];

function encodeIP(ip) {
    const regex = new RegExp('^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$');
    if(!regex.test(ip)) {
        throw new Error('Invalid IP address passed to encodeIP()');
    }
    
    const numbers = ip.split('.');
    
    let wordcombo = "";
    for(let i = 0; i < 4; i++) {
        wordcombo += words[numbers[i]];
        if(i != 3) wordcombo += ' ';
    }

    return wordcombo;
}

function decodeIP(wordcombo) {
    const regex = new RegExp('^([A-z]{2,}[ ]){3}[A-z]{2,}$');
    if(!regex.test(wordcombo)) {
        throw new Error("Invalid word combination passed to decodeIP()");
    }

    const decodedWords = wordcombo.split(' ');

    let ip = "";
    for(let i = 0; i < 4; i++) {
        ip += words.indexOf(decodedWords[i]);
        if(i != 3) ip += '.';
    }

    return ip;
}

exports.words = words;
exports.encodeIP = encodeIP;
exports.decodeIP = decodeIP;

const options = yargs
    .usage('-d "words" | -e ip')
    .option('d', {alias : 'decode', describe : 'String to be decoded', type : 'string', demandOption : false})
    .option('e', {alias : 'encode', describe : 'IP to be encoded', type: 'string', demandOption : false})
    .argv;

try {
    if(options.decode)
        console.log(decodeIP(options.decode));
    if(options.encode)
        console.log(encodeIP(options.encode));
} catch (error) {
    console.log(error.message);
    process.exit(-1);
}