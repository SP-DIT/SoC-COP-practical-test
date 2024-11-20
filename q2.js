module.exports = timeToTravel; // DO NOT REMOVE

/**
 * John is doing a road trip from Singapore all the way to Thailand, driving through Malaysia.
 *
 * Along the way, John will need to refuel his car. He has done his homework and found the gas stations
 *
 * Each full refuel can last him 100km.
 *
 * If he choose to stop and refuel, he would always pump a full tank and refill
 *
 * And regardless of current capacity, refuel always take an additional 1 hour to do so.
 *
 * If John travels 10km per hour, what is the minimum amount of time John need to make the journey?
 *
 * If there is no solution, return -1.
 *
 * @param distanceToPumps: int[],
 *              distance in km between 2 pump station.
 *              The last value in the array is the distance from the last pump station to the destination.
 * @returns a single number representing the number of hours taken.
 *
 * Example: [90, 90, 90] - John would take 9 + 1 + 9 + 1 + 9 = 29 hours
 * Explanation:
 *      - Traveling at 10km per hour, John would take 9 hours to reach the first station.
 *      - As he only has 10km of fuel left, he has to refuel, taking him 1 hour to do so.
 *      - He would continue his travels, taking another 9 hours.
 *      - Refuel once again, taking him 1 hour to do so.
 *      - And make the final 9 hour to reach the destination.
 *
 * Example: [20, 40, 40, 10] - John would take 10 + 1 + 1 hours
 *      - John will drive the first 10 hours to cover the full 100km to reach the final station
 *      - He would take 1 hour to refuel the tank
 *      - He then take another hour to complete the final 10km.
 *
 */

function timeToTravel(distanceToPumps) {}

// Run your own tests here:
timeToTravel([90, 90, 90]);