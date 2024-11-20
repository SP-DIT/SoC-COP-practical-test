module.exports = shuffle; // DO NOT REMOVE

/**
 * You are in a casino and you observed how the dealer shuffles the card using the dovetail shuffling method.
 *
 * The dovetail shuffling methods works by separating the deck into 2 equal parts and interleaving the cards from the 2 half. For example
 *
 * 1. Suppose the deck is [1, 2, 3, 4]
 * 2. The dealer will split the deck into 2 equal parts, [1,2] and [3,4]
 * 3. The dealer would interleave the two deck resulting in [1, 3, 2, 4]
 * 4. Repeating one more time: [1,3] + [2, 4] => [1,2,3,4]
 *
 * You decided to write a program to determine the deck's status and to know in advance the cards you will receive and the sum of them.
 *
 * You are given 3 parameters
 * 1. An array, the original state of the deck of cards, a card is represented with a number from 1 to n. n will be an even number.
 * 2. The number of times the dealer shuffled the deck using the dovetail shuffling method.
 * 3. An array of number representing the index of the cards (0-based index) you will be receiving.
 *
 * You are to return the sum of the cards that you will be receiving.
 *
 * Example: [1,2,3,4], 2, [1,2]
 * Return: 2 + 3 = 5
 * Explanation: After 2 dovetail shuffling, the deck will be [1,2,3,4], taking the cards at index 1 and 2, will result in [2,3].
 *
 * Example 2: [1,2,3,4,5,6], 3, [1, 4]
 * Return: 3 + 4 = 7
 * Explanation:
 *  - After 1st shuffle: [1,4,2,5,3,6]
 *  - After 2nd shuffle: [1,5,4,3,2,6]
 *  - After 3rd shuffle: [1,3,5,2,4,6]
 *  - Card at index 1 and 4 = [3, 4]
 */

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
