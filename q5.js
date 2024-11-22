module.exports = hospitalQueue; // DO NOT REMOVE

/**
 * Implement a program to simulate a hospital queue system.
 *
 * The program supports three operations:
 * 1. "Enqueue" - Add a patient to the queue.
 * 2. "Serve" - Remove the next patient from the queue.
 * 3. "Record" - Record the current number of patients in the queue.
 *
 * @params {string[]} operations - representing a sequence of these operations.
 *
 * @returns {int[]} an array containing the number of patients in the queue each time a "Record" operation is executed.
 *
 * Additional Notes:
 * - If there are no "Record" operations in the input, return an empty array.
 * - You can assume that "Serve" will not be called when the queue is empty.
 *
 * @example
 * // Input: ["Enqueue", "Enqueue", "Record", "Serve", "Enqueue", "Enqueue", "Record"]
 * // Output: [2, 3]
 *
 * // Explanation:
 * // 1. "Enqueue" - Add 1 patient (queue size = 1).
 * // 2. "Enqueue" - Add another patient (queue size = 2).
 * // 3. "Record" - Record the current queue size (result = [2]).
 * // 4. "Serve" - Remove 1 patient (queue size = 1).
 * // 5. "Enqueue" - Add 1 patient (queue size = 2).
 * // 6. "Enqueue" - Add 1 patient (queue size = 3).
 * // 7. "Record" - Record the current queue size (result = [2, 3]).
 */

function hospitalQueue(operations) {}

// Run your own tests here:
hospitalQueue(['Enqueue', 'Enqueue', 'Record', 'Serve', 'Enqueue', 'Enqueue', 'Record']);
