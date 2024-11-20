module.exports = largestSum;

/**
 * Return the largest sum of any two unique numbers in the "numbers" array
 *
 * e.g. [9, 15, 6, 3, 20, 19, 8, 4]
 *
 * Answer = 20 + 19 = 39
 *
 * Explanation: Out of all pairs of number (e.g. [9, 15], [15, 6], [6, 3], etc...) the largest sum can be obtained from [20, 19].
 *
 * @param numbers: int[], an array of unique numbers.
 * @returns a single number, representing the largest sum of any 2 numbers.
 */

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
