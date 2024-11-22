module.exports = shuffle; // DO NOT REMOVE

/**
 * You are at a casino playing a game where the dealer shuffles the card, deals you a set number of cards, and the player with the highest sum wins.
 *
 * You observed that at each round, the dealer uses the dovetail shuffling method a few times,
 *
 * and given that you get to know in advance the index of the cards you will be given,
 *
 * you decided to simulate the dovetail shuffling of a deck of cards and calculate the sum of specific cards after a given number of shuffles.
 *
 * The dovetail shuffling method works by splitting the deck into two equal parts and interleaving the cards from each half.
 * For example:
 *  - Before shuffling: [1, 2, 3, 4]
 *  - After splitting: [1, 2] and [3, 4]
 *  - After interleaving: [1, 3, 2, 4]
 *
 * @param {int[]} deck - The original state of the deck of cards, represented as an array of numbers from 1 to n (n is even).
 * @param {int} shuffles - The number of times the dealer shuffles the deck using the dovetail method.
 * @param {int[]} indices - An array of 0-based indices representing the cards to be selected after shuffling.
 * @returns {int} - The sum of the cards at the specified indices after the given number of shuffles.
 *
 *
 * @example
 * // Example 1
 * // Input: [1, 2, 3, 4], 2, [1, 2]
 * // Output: 5
 * // Explanation:
 * // - After 2 dovetail shuffles, the deck remains [1, 2, 3, 4].
 * // - Cards at indices 1 and 2 are [2, 3].
 * // - Sum: 2 + 3 = 5
 *
 * @example
 * // Example 2
 * // Input: [1, 2, 3, 4, 5, 6], 3, [1, 4]
 * // Output: 7
 * // Explanation:
 * // - After 1st shuffle: [1, 4, 2, 5, 3, 6]
 * // - After 2nd shuffle: [1, 5, 4, 3, 2, 6]
 * // - After 3rd shuffle: [1, 3, 5, 2, 4, 6]
 * // - Cards at indices 1 and 4 are [3, 4].
 * // - Sum: 3 + 4 = 7
 *
 * @example
 * // Example 3
 * // Input: [3, 7, 5, 2, 6, 1], 2, [4, 3]
 * // Output: 7
 * // Explanation:
 * // - After 1st shuffle: [3, 2, 7, 6, 5, 1]
 * // - After 2nd shuffle: [3, 6, 2, 5, 7, 1]
 * // - Cards at indices 4 and 3 are [7, 5].
 * // - Sum: 7 + 5 = 12
 */

function shuffle(deck, numberOfShuffle, indexes) {}

// Run your own tests here:
shuffle([1, 2, 3, 4], 2, [1, 2]);
