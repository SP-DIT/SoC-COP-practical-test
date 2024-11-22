const q5 = require('../q5');
const test = require('./utils');

const questions = [
    { input: [['Enqueue', 'Enqueue', 'Record', 'Serve', 'Enqueue', 'Enqueue', 'Record']], output: [2, 3] },
    { input: [['Enqueue', 'Enqueue', 'Enqueue', 'Enqueue', 'Enqueue', 'Enqueue']], output: [] },
    { input: [['Enqueue', 'Record', 'Record']], output: [1, 1] },
    { input: [['Enqueue', 'Record', 'Serve', 'Record']], output: [1, 0] },
    { input: [['Enqueue', 'Record', 'Serve', 'Enqueue', 'Serve', 'Enqueue', 'Record']], output: [1, 1] },
    {
        input: [
            [
                'Record',
                'Record',
                'Enqueue',
                'Record',
                'Serve',
                'Record',
                'Enqueue',
                'Serve',
                'Record',
                'Record',
                'Enqueue',
                'Serve',
                'Enqueue',
                'Record',
                'Enqueue',
                'Enqueue',
                'Enqueue',
                'Enqueue',
                'Enqueue',
                'Record',
                'Record',
                'Serve',
                'Record',
                'Enqueue',
                'Record',
                'Record',
                'Enqueue',
                'Record',
                'Enqueue',
                'Serve',
                'Record',
                'Enqueue',
                'Record',
                'Enqueue',
                'Enqueue',
                'Serve',
                'Serve',
                'Serve',
                'Record',
                'Enqueue',
                'Enqueue',
                'Record',
                'Record',
                'Serve',
                'Record',
                'Enqueue',
                'Record',
                'Serve',
                'Serve',
                'Enqueue',
                'Serve',
                'Serve',
                'Serve',
                'Enqueue',
                'Serve',
                'Record',
                'Enqueue',
                'Serve',
                'Record',
                'Serve',
                'Serve',
                'Enqueue',
                'Serve',
                'Enqueue',
                'Serve',
                'Enqueue',
                'Record',
                'Record',
                'Record',
                'Enqueue',
                'Record',
                'Serve',
                'Record',
                'Record',
                'Record',
                'Enqueue',
                'Serve',
                'Serve',
                'Enqueue',
                'Enqueue',
                'Serve',
                'Serve',
                'Record',
                'Enqueue',
                'Serve',
                'Serve',
                'Serve',
                'Enqueue',
                'Enqueue',
                'Record',
                'Enqueue',
                'Serve',
                'Record',
                'Record',
                'Enqueue',
                'Record',
                'Serve',
                'Serve',
                'Record',
                'Enqueue',
            ],
        ],
        output: [
            0, 0, 1, 0, 0, 0, 1, 6, 6, 5, 6, 6, 7, 7, 8, 7, 9, 9, 8, 9, 5, 5, 4, 4, 4, 5, 4, 4, 4, 3, 3, 3, 3, 4, 2,
        ],
    },
    {
        input: [
            [
                'Record',
                'Record',
                'Enqueue',
                'Serve',
                'Enqueue',
                'Enqueue',
                'Serve',
                'Enqueue',
                'Record',
                'Serve',
                'Record',
                'Serve',
                'Record',
                'Record',
                'Record',
                'Record',
                'Enqueue',
                'Record',
                'Enqueue',
                'Serve',
                'Serve',
                'Enqueue',
                'Enqueue',
                'Record',
                'Serve',
                'Record',
                'Enqueue',
                'Record',
                'Record',
                'Enqueue',
                'Enqueue',
                'Serve',
                'Serve',
                'Record',
                'Serve',
                'Serve',
                'Enqueue',
                'Record',
                'Enqueue',
                'Enqueue',
                'Serve',
                'Record',
                'Record',
                'Enqueue',
                'Serve',
                'Enqueue',
                'Serve',
                'Serve',
                'Enqueue',
                'Enqueue',
                'Record',
                'Enqueue',
                'Serve',
                'Serve',
                'Record',
                'Record',
                'Serve',
                'Record',
                'Serve',
                'Enqueue',
                'Serve',
                'Record',
                'Enqueue',
                'Serve',
                'Enqueue',
                'Record',
                'Serve',
                'Record',
                'Enqueue',
                'Record',
                'Enqueue',
                'Serve',
                'Serve',
                'Enqueue',
                'Enqueue',
                'Serve',
                'Enqueue',
                'Serve',
                'Record',
                'Enqueue',
                'Serve',
                'Enqueue',
                'Enqueue',
                'Enqueue',
                'Enqueue',
                'Enqueue',
                'Enqueue',
                'Enqueue',
                'Serve',
                'Serve',
                'Serve',
                'Record',
                'Record',
                'Record',
                'Serve',
                'Record',
                'Enqueue',
                'Serve',
                'Enqueue',
                'Enqueue',
                'Record',
                'Record',
                'Enqueue',
                'Record',
                'Record',
                'Record',
                'Record',
                'Record',
                'Record',
                'Enqueue',
                'Record',
                'Enqueue',
                'Serve',
                'Enqueue',
                'Enqueue',
                'Record',
                'Serve',
                'Enqueue',
                'Enqueue',
                'Enqueue',
                'Serve',
                'Serve',
                'Serve',
                'Record',
                'Enqueue',
                'Record',
                'Serve',
                'Enqueue',
                'Serve',
                'Enqueue',
                'Serve',
                'Enqueue',
                'Enqueue',
                'Record',
                'Enqueue',
                'Serve',
                'Record',
                'Record',
                'Enqueue',
                'Enqueue',
                'Enqueue',
                'Enqueue',
                'Record',
                'Serve',
                'Enqueue',
                'Enqueue',
                'Enqueue',
                'Serve',
                'Enqueue',
                'Record',
                'Enqueue',
                'Enqueue',
                'Enqueue',
                'Record',
                'Enqueue',
                'Serve',
                'Serve',
                'Record',
                'Enqueue',
                'Record',
                'Enqueue',
                'Record',
                'Serve',
                'Enqueue',
                'Enqueue',
                'Record',
                'Record',
                'Serve',
                'Enqueue',
                'Enqueue',
                'Enqueue',
                'Enqueue',
                'Enqueue',
                'Serve',
                'Enqueue',
                'Serve',
                'Enqueue',
                'Serve',
                'Enqueue',
                'Serve',
                'Enqueue',
                'Record',
                'Enqueue',
                'Enqueue',
                'Enqueue',
                'Record',
                'Serve',
                'Record',
                'Record',
                'Serve',
                'Serve',
                'Record',
                'Serve',
                'Enqueue',
                'Enqueue',
                'Record',
                'Serve',
                'Enqueue',
                'Serve',
                'Enqueue',
                'Serve',
                'Serve',
                'Enqueue',
                'Enqueue',
                'Enqueue',
                'Serve',
                'Enqueue',
                'Serve',
                'Serve',
                'Enqueue',
                'Enqueue',
                'Enqueue',
                'Serve',
                'Enqueue',
                'Record',
                'Serve',
                'Record',
                'Serve',
                'Enqueue',
                'Serve',
                'Enqueue',
                'Serve',
                'Enqueue',
                'Record',
                'Enqueue',
                'Enqueue',
                'Record',
                'Record',
                'Enqueue',
                'Enqueue',
                'Enqueue',
                'Record',
                'Enqueue',
                'Enqueue',
                'Enqueue',
                'Record',
                'Serve',
                'Record',
                'Record',
                'Enqueue',
                'Serve',
                'Enqueue',
                'Enqueue',
                'Enqueue',
                'Record',
                'Record',
                'Serve',
                'Record',
                'Serve',
                'Enqueue',
                'Serve',
                'Record',
                'Record',
                'Serve',
                'Record',
                'Serve',
                'Record',
                'Enqueue',
                'Enqueue',
                'Enqueue',
                'Record',
                'Serve',
                'Record',
                'Enqueue',
                'Record',
                'Record',
                'Enqueue',
                'Record',
                'Serve',
                'Serve',
                'Record',
                'Record',
                'Record',
                'Enqueue',
                'Enqueue',
                'Enqueue',
                'Record',
                'Serve',
                'Enqueue',
                'Enqueue',
                'Record',
                'Enqueue',
                'Serve',
                'Serve',
                'Enqueue',
                'Serve',
                'Enqueue',
                'Record',
                'Enqueue',
                'Enqueue',
                'Record',
                'Serve',
                'Record',
                'Record',
                'Serve',
                'Serve',
                'Record',
                'Record',
                'Record',
                'Record',
                'Serve',
                'Enqueue',
                'Record',
                'Enqueue',
                'Serve',
                'Enqueue',
                'Record',
                'Serve',
                'Serve',
                'Record',
                'Record',
                'Serve',
                'Record',
                'Record',
                'Record',
                'Enqueue',
                'Enqueue',
                'Record',
                'Record',
                'Record',
                'Serve',
                'Enqueue',
                'Enqueue',
                'Serve',
                'Serve',
                'Serve',
                'Enqueue',
                'Enqueue',
                'Enqueue',
                'Serve',
                'Record',
                'Enqueue',
                'Enqueue',
                'Record',
                'Enqueue',
                'Record',
                'Record',
                'Serve',
                'Record',
                'Enqueue',
                'Enqueue',
                'Enqueue',
                'Serve',
                'Enqueue',
                'Serve',
                'Record',
                'Serve',
                'Record',
                'Serve',
                'Serve',
                'Enqueue',
                'Serve',
                'Enqueue',
                'Enqueue',
                'Enqueue',
                'Enqueue',
                'Record',
                'Enqueue',
                'Serve',
                'Record',
                'Record',
                'Serve',
                'Record',
                'Serve',
                'Enqueue',
                'Record',
                'Record',
                'Record',
                'Record',
                'Record',
                'Serve',
                'Record',
                'Enqueue',
                'Record',
                'Enqueue',
                'Record',
                'Enqueue',
                'Record',
                'Enqueue',
                'Record',
                'Record',
                'Record',
                'Enqueue',
                'Enqueue',
                'Enqueue',
                'Enqueue',
                'Enqueue',
                'Record',
                'Serve',
                'Serve',
                'Enqueue',
                'Record',
                'Enqueue',
                'Record',
                'Enqueue',
                'Serve',
                'Enqueue',
                'Serve',
                'Record',
                'Record',
                'Enqueue',
                'Serve',
                'Serve',
                'Serve',
                'Serve',
                'Enqueue',
                'Enqueue',
                'Enqueue',
                'Serve',
                'Serve',
                'Enqueue',
                'Record',
                'Serve',
                'Serve',
                'Serve',
                'Record',
                'Serve',
                'Serve',
                'Serve',
                'Serve',
                'Enqueue',
                'Record',
                'Record',
                'Record',
                'Serve',
                'Record',
                'Serve',
                'Enqueue',
                'Serve',
                'Serve',
                'Serve',
                'Serve',
                'Enqueue',
                'Record',
                'Serve',
                'Record',
                'Record',
                'Serve',
                'Record',
                'Record',
                'Enqueue',
                'Record',
                'Record',
                'Enqueue',
                'Serve',
                'Serve',
                'Serve',
                'Serve',
                'Serve',
                'Serve',
                'Record',
                'Serve',
                'Record',
                'Serve',
                'Serve',
                'Serve',
                'Enqueue',
                'Serve',
                'Serve',
                'Enqueue',
                'Record',
                'Enqueue',
                'Record',
                'Record',
                'Serve',
                'Serve',
                'Serve',
                'Record',
                'Record',
                'Record',
                'Enqueue',
                'Serve',
                'Serve',
                'Record',
                'Record',
                'Serve',
                'Serve',
                'Enqueue',
                'Serve',
                'Serve',
                'Enqueue',
                'Enqueue',
                'Record',
                'Serve',
                'Enqueue',
                'Serve',
                'Serve',
                'Record',
                'Record',
                'Serve',
                'Serve',
                'Enqueue',
                'Serve',
                'Serve',
                'Serve',
                'Record',
                'Enqueue',
                'Record',
                'Enqueue',
                'Enqueue',
            ],
        ],
        output: [
            0, 0, 2, 1, 0, 0, 0, 0, 1, 2, 1, 2, 2, 2, 1, 2, 2, 3, 2, 2, 1, 0, 1, 0, 1, 1, 5, 5, 5, 4, 6, 6, 7, 7, 7, 7,
            7, 7, 8, 10, 9, 10, 11, 11, 11, 15, 17, 20, 19, 20, 21, 22, 22, 26, 29, 28, 28, 26, 27, 29, 28, 28, 30, 30,
            33, 36, 35, 35, 38, 38, 37, 36, 36, 35, 34, 37, 36, 37, 37, 38, 36, 36, 36, 39, 40, 40, 42, 41, 41, 39, 39,
            39, 39, 39, 40, 38, 38, 37, 37, 37, 39, 39, 39, 39, 41, 42, 42, 41, 43, 42, 44, 44, 44, 43, 43, 43, 43, 43,
            43, 42, 43, 44, 45, 46, 46, 46, 51, 50, 51, 51, 51, 50, 47, 44, 44, 44, 43, 40, 39, 39, 38, 38, 39, 39, 34,
            33, 30, 31, 31, 28, 28, 28, 27, 27, 26, 24, 24, 20, 21,
        ],
    },
];

test(5, questions, q5);
