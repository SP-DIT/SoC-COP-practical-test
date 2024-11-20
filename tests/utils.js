const alphabets = 'abcdefghijklmnopqrstuvwxyz';

module.exports = function test(questionNumber, questions, fn) {
    questions.forEach(({ input, output }, index) => {
        const questionSubNumber = alphabets[index];
        const actual = fn(...input);
        if (actual === output) {
            console.log(`Question ${questionNumber}${questionSubNumber} passed!`);
        } else {
            console.log(
                `Question ${questionNumber}${questionSubNumber} failed! Expected:`,
                output,
                `received:`,
                actual,
            );
        }
    });
};
