function invertString(string: string): string {
    let finalString = '';

    for (let i = string.length - 1; i >= 0; i--) {
        finalString += string[i];
    }

    return finalString;
}

const string_original: string = 'String para ser invertida';

console.log(invertString(string_original));
