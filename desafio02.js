function fibonacciSequence(number) {
    let fibonacci = [0, 1];

    while (fibonacci[fibonacci.length - 1] < number){
        let nextFibonacci = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]
        fibonacci.push(nextFibonacci);
    }

    if(fibonacci.includes(number)){
        return ` ${number} pertence a sequencia de fibonacci`;
            
        } else {
            return `${number} Não pertence a sequencia de fibonacci`;
        }
}
const inputNumber = 21;
console.log(fibonacciSequence(inputNumber));