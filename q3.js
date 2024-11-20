module.exports = basketball; // DO NOT REMOVE

/**
 * You are observing a basketball game between Ahmad and Benedict.
 *
 * Each shot earns either 1 or 2 points.
 *
 * First to 11 points wins, with one exception:
 *
 * Players must win by 2 points, so in a situation of 10-10, the first player to lead by 2 (e.g. 12-10, 12-14) is the winner.
 *
 * Whenever each player scored a goal, you recorded down the 'A' or 'B' indicating Ahmad or Benedict and the score (1 or 2).
 *
 * But you have forgotten who won the game, from your records, reconstruct the winner of the game.
 *
 * @params scores: string[], the sequence of scores
 * @returns 'A' if Ahmad won, and 'B' if Benedict won.
 *
 * Example: ['A2', 'B1', 'A2', 'B2', 'A1', 'A2', 'A2', 'A2'] - Winner: Ahmad
 * Explanation:
 *  - The game started with Ahmad scoring 2 points (2-0)
 *  - Followed by Benedict scoring 1 (2-1)
 *  - Then Alice 2 points (4-1)
 *  - Then Benedict 2 points (4-3)
 *  - Alice then scored 7 points back to back (11-3)
 *  - As Alice is the first to reach 11 points, Alice won.
 *
 * Example: ['A2', 'B2', 'A2', 'B2', 'A2', 'B2', 'A2', 'B2', 'A2', 'B2', 'B1', 'B2']
 *  - Ahmad and Benedict took turn to score, bring the score to 10-10
 *  - On the 11th play, Benedict scored 1 point, bringing the score to 10-11
 *  - But due to the "Win by 2" rule, Benedict has yet won the game, despite reaching 11 first.
 *  - Benedict then scored another 2 point bring the score to 10-13
 *  - As Benedict exceeded 11 points and fulfills the "Win by 2", Benedict won.
 *
 */

function basketball(scores) {}

// Run your own tests here:
basketball(['A2', 'B1', 'A2', 'B2', 'A1', 'A2', 'A2', 'A2']);
