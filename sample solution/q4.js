module.exports = shuffle; // DO NOT REMOVE

function shuffle(deck, numberOfShuffle, indexes) {
    if (numberOfShuffle == 0) {
        return indexes.map((index) => deck[index]).reduce((sum, value) => sum + value, 0);
    }
    const firstHalf = [],
        secondHalf = [];
    for (let i = 0; i < deck.length; i++) {
        if (i < deck.length / 2) {
            firstHalf.push(deck[i]);
        } else {
            secondHalf.push(deck[i]);
        }
    }
    const result = [];
    for (let i = 0; i < firstHalf.length; i++) {
        result.push(firstHalf[i]);
        result.push(secondHalf[i]);
    }
    return shuffle(result, numberOfShuffle - 1, indexes);
}

function shuffle(deck, numberOfShuffle, indexes) {
    // Perform the dovetail shuffle for a specified number of times
    for (let i = 0; i < numberOfShuffle; i++) {
        const mid = deck.length / 2;
        const left = deck.slice(0, mid);
        const right = deck.slice(mid);
        const shuffled = [];
        for (let j = 0; j < mid; j++) {
            shuffled.push(left[j], right[j]);
        }
        deck = shuffled;
    }

    // Compute the sum of the cards at the specified indexes
    let sum = 0;
    for (const idx of indexes) {
        sum += deck[idx];
    }

    return sum;
}
