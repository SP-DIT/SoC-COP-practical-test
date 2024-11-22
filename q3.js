module.exports = basketball; // DO NOT REMOVE

/**
 * You are observing a basketball game between Ahmad and Benedict.
 *
 * Game Rules:
 * 1. Each shot earns either 1 or 2 points.
 * 2. The first player to reach at least 11 points wins, with the condition that they must lead by at least 2 points.
 *    - Example: A player wins with scores like 12-10 or 14-12.
 *    - If the score reaches 10-10, the game continues until one player leads by 2 points.
 *
 * You recorded the sequence of events in the game as an array of strings.
 * Each entry represents a player ('A' for Ahmad, 'B' for Benedict) and the points they scored (1 or 2).
 *
 * Your task is to determine the winner of the game based on the recorded scores.
 *
 * Additional Notes:
 * - You can assume that there is no error in the recording
 *
 * Parameters:
 * @param {string[]} scores - An array of strings representing the sequence of scores in the game.
 *                            Each string is in the format 'A1', 'B2', etc., where:
 *                              - 'A' or 'B' indicates the player (Ahmad or Benedict).
 *                              - '1' or '2' indicates the points scored in that shot.
 *
 * @returns {string} - Return 'A' if Ahmad won, or 'B' if Benedict won.
 *
 * @example
 * // Example 1:
 * // Input: ['A2', 'B1', 'A2', 'B2', 'A1', 'A2', 'A2', 'A2']
 * // Output: 'A'
 * // Explanation:
 * //  - Ahmad scored 2 points (score: 2-0).
 * //  - Benedict scored 1 point (score: 2-1).
 * //  - Ahmad scored 2 points (score: 4-1).
 * //  - Benedict scored 2 points (score: 4-3).
 * //  - Ahmad scored 1, 2, 2, and 2 points consecutively (score: 11-3).
 * //  - Ahmad was the first to reach 11 points with a lead of at least 2 points, so Ahmad won.
 *
 * @example
 * // Example 2:
 * // Input: ['A2', 'B2', 'A2', 'B2', 'A2', 'B2', 'A2', 'B2', 'A2', 'B2', 'B1', 'B2']
 * // Output: 'B'
 * // Explanation:
 * //  - Ahmad and Benedict alternated scoring, reaching a tie at 10-10.
 * //  - Benedict scored 1 point (score: 10-11), but the "Win by 2" rule was not satisfied.
 * //  - Benedict scored 2 more points (score: 10-13), fulfilling the "Win by 2" rule.
 * //  - Benedict exceeded 11 points with a lead of at least 2 points, so Benedict won.
 */

function basketball(scores) {}

// Run your own tests here:
basketball(['A2', 'B1', 'A2', 'B2', 'A1', 'A2', 'A2', 'A2']);
