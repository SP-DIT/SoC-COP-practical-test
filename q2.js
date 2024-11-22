module.exports = timeToTravel; // DO NOT REMOVE

/**
 * John is doing a road trip from Singapore to Thailand, driving through Malaysia.
 *
 * Along the way, he needs to refuel his car at various gas stations.
 *
 * Each full refuel lasts for 100km, and refueling takes an additional 1 hour.
 *
 * John drives at a speed of 10km per hour.
 *
 * The goal is to determine the minimum time John will take to complete his journey.
 *
 * If no solution exists (e.g., distances between stations are too far), return -1.
 *
 * @param {number[]} distanceToPumps - An array representing the distances (in km) between consecutive pump stations.
 *                                    The last value represents the distance from the last pump station to the destination.
 * @returns {number} - The minimum number of hours John will take to complete the journey, or -1 if no solution exists.
 *
 * @example
 * // Example 1
 * // Input: [90, 90, 90]
 * // Output: 29
 * // Explanation:
 * // - Traveling at 10km per hour, John takes 9 hours to reach the first station (90km).
 * // - He refuels, which takes 1 hour.
 * // - He continues, takes 9 more hours, refuels again, and repeats until the destination.
 * // Total time: 9 (drive) + 1 (refuel) + 9 (drive) + 1 (refuel) + 9 (drive) = 29 hours.
 *
 * @example
 * // Example 2
 * // Input: [20, 40, 40, 10]
 * // Output: 10
 * // Explanation:
 * // - John drives the first 10 hours to cover the full 100km to the first station.
 * // - He refuels (1 hour).
 * // - Then he drives the next 10km (1 hour) to the final destination.
 *
 *  * @example
 * // Example 3
 * // Input: [10, 120, 80]
 * // Output: -1
 * // Explanation:
 * // - After the first station, John would not be able to reach station 2 as he only has 100km worth of fuel but the station is 120km away.
 */

function timeToTravel(distanceToPumps) {}

// Run your own tests here:
timeToTravel([90, 90, 90]);
