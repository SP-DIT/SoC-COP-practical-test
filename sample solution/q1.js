module.exports = largestSum;

function largestSum(numbers) {}

function largestSum(numbers) {
    return numbers
        .sort((a, b) => b - a)
        .splice(0, 2)
        .reduce((prev, current) => prev + current, 0);
}

function largestSum(numbers) {
    let largestSum = 0;

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            const sum = numbers[i] + numbers[j];
            if (sum > largestSum) largestSum = sum;
        }
    }

    return largestSum;
}
