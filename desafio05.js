function inverterString(str) {
    let invertedString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        invertedString += str[i];
    }
    return invertedString;
}

// Testando a função com uma string pré-definida
const stringOriginal = "Hello, world!";
const stringInvertida = inverterString(stringOriginal);
console.log("String original:", stringOriginal);
console.log("String invertida:", stringInvertida);