let N = +prompt('Введіть початкове число N')

while (!Number.isInteger(N) || N <= 0) {
    N = +prompt('Введене число невірне. Введіть ціле початкове число N')
}


let M = +prompt('Введіть кінцеве число M')

while (!Number.isInteger(M) || M <= N) {
    M = +prompt('Введене число невірне. Введіть ціле кінцеве число M')

}

skipEvenNumbers = confirm('Чи бажаєте ви пропустити парні числа?')

let summ = 0;

if (skipEvenNumbers) {
    for (let i = N; i <= M; i++) {
        if (i % 2 !== 0) {
            summ += i
        }
    }
}
else {
    for (let i = N; i <= M; i++) {
            summ += i
    }
}


document.writeln('Summ is: ' + summ);
