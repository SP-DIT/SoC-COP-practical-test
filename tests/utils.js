const alphabets = 'abcdefghijklmnopqrstuvwxyz';

function processResult(result) {
    if (!result) return result;
    if (result.length > 100) {
        return JSON.stringify(result);
    }

    return result;
}

module.exports = function test(questionNumber, questions, fn) {
    questions.forEach(({ input, output }, index) => {
        const questionSubNumber = alphabets[index];
        const actual = fn(...input);
        if (JSON.stringify(actual) === JSON.stringify(output)) {
            console.log(`Question ${questionNumber}${questionSubNumber} passed!`);
        } else {
            console.log(
                `Question ${questionNumber}${questionSubNumber} failed! Expected:`,
                processResult(output),
                `received:`,
                processResult(actual),
            );
        }
    });
};
