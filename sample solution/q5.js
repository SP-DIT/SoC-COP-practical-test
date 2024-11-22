module.exports = hospitalQueue; // DO NOT REMOVE

function hospitalQueue(operations) {
    return operations
        .reduce(
            (result, operation) => {
                if (operation === 'Enqueue') result[result.length - 1]++;
                else if (operation === 'Serve') result[result.length - 1]--;
                else result.push(result[result.length - 1]);
                return result;
            },
            [0],
        )
        .slice(0, -1);
}

function hospitalQueue(operations) {
    let queue = [];
    let results = [];

    for (let operation of operations) {
        if (operation === 'Enqueue') {
            queue.push('patient');
        } else if (operation === 'Serve') {
            queue.shift();
        } else if (operation === 'Record') {
            results.push(queue.length);
        }
    }

    return results;
}

function hospitalQueue(operations) {
    let patientCount = 0;
    let results = [];

    for (let operation of operations) {
        if (operation === 'Enqueue') {
            patientCount++;
        } else if (operation === 'Serve') {
            patientCount--;
        } else if (operation === 'Record') {
            results.push(patientCount);
        }
    }

    return results;
}

// Run your own tests here:
hospitalQueue(['Enqueue', 'Enqueue', 'Record', 'Serve', 'Enqueue', 'Enqueue', 'Record']);
