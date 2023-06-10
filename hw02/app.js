let N = +prompt('Введіть початкове число N')

while ((N !== Math.floor(N)) || (isNaN(N))) {
    N = +prompt('Введене число невірне. Введіть ціле початкове число N')
}


let M = +prompt('Введіть кінцеве число M')

while ((M !== Math.floor(M)) || (isNaN(M))) {
    M = +prompt('Введене число невірне. Введіть ціле кінцеве число M')
    isIntegerM = M === Math.floor(M);

}

skipEvenNumbers = confirm('Чи бажаєте ви пропустити парні числа?')

let Summ = 0;

if (skipEvenNumbers) {
    for (let i = N; i <= M; i++) {
        if (i % 2 !== 0) {
            Summ += i
        }
    }
}
else {
    for (let i = N; i <= M; i++) {
            Summ += i
    }
}


document.writeln('Summ is: ' + Summ);
