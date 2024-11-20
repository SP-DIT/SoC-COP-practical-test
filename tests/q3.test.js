const q3 = require('../q3');
const test = require('./utils');

const questions = [
    { input: [['A2', 'B1', 'A2', 'B2', 'A1', 'A2', 'A2', 'A2']], output: 'A' },
    { input: [['A2', 'B2', 'A2', 'B2', 'A2', 'B2', 'A2', 'B2', 'A2', 'B2', 'B1', 'B2']], output: 'B' },
    { input: [['A2', 'A2', 'A2', 'A2', 'A2', 'A2']], output: 'A' },
    {
        input: [['B1', 'A2', 'B1', 'A2', 'B1', 'B1', 'A2', 'B1', 'B1', 'B1', 'B1', 'A2', 'B1', 'B1', 'B1']],
        output: 'B',
    },
    { input: [['B2', 'A2', 'B1', 'A2', 'B2', 'A1', 'B2', 'A2', 'B2', 'A2', 'A2']], output: 'A' },
    { input: [['B2', 'A2', 'B1', 'A2', 'B2', 'A1', 'B2', 'A2', 'B2', 'A2', 'A2']], output: 'A' },
    { input: [['A1', 'B1', 'A1', 'B1', 'A1', 'A1', 'B2', 'A1', 'A1', 'A2', 'A2', 'A1']], output: 'A' },
];

test(3, questions, q3);
