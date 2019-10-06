const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    // write your solution here
    let result = [];
    let newStr = expr.match(/.{1,10}/g);
    for (let i = 0; i < newStr.length; i++) {
        let morseSymbol = newStr[i];
        morseSymbol = morseSymbol
            .replace(/00/g, '')
            .replace(/10/g, '.')
            .replace(/11/g, '-');
        result.push(MORSE_TABLE[morseSymbol] ? MORSE_TABLE[morseSymbol] : ' ');
    }
    return result.join('');
}

module.exports = {
    decode
}

