import * as readline from 'node:readline/promises';

function isNumberInFibonacci(number: number) {
    if (number < 0) {
        return false;
    }

    if (number === 0 || number === 1) {
        return true;
    }

    const fibArray: number[] = [0, 1];

    let i = 2;

    while (true) {
        const nextNumber = fibArray[i - 1] + fibArray[i - 2];
        if (nextNumber > number) {
            return false;
        }

        if (nextNumber === number) {
            return true;
        }

        fibArray[i] = nextNumber;

        i++;
    }
}

const leitor = readline.createInterface(process.stdin, process.stdout);

leitor
    .question(
        'Digite um número para saber se ele está na sequencia de Fibonacci: '
    )
    .then((answer) => {
        if (isNumberInFibonacci(Number(answer))) {
            console.log(`${answer} está na sequencia de Fibonacci`);
        } else {
            console.log(`${answer} não está na sequencia de Fibonacci`);
        }
    })
    .finally(() => {
        leitor.close();
    });
