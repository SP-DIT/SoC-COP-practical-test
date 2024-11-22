module.exports = timeToTravel;

function timeToTravel(distanceToPumps) {}

function timeToTravel(distanceToPumps) {
    const result = [0];
    for (let i = 0; i < distanceToPumps.length; i++) {
        if (distanceToPumps[i] > 100) return -1;
        if (result[result.length - 1] + distanceToPumps[i] > 100) result.push(distanceToPumps[i]);
        else result[result.length - 1] += distanceToPumps[i];
    }
    let totalDistance = 0;
    for (let i = 0; i < result.length; i++) {
        totalDistance += result[i];
    }

    return totalDistance / 10 + result.length - 1;
}

function timeToTravel(distanceToPumps) {
    let fuel = 100;
    let timeTaken = 0;
    for (let i = 0; i < distanceToPumps.length; i++) {
        if (distanceToPumps[i] > 100) return -1;
        if (fuel < distanceToPumps[i]) {
            fuel = 100 - distanceToPumps[i];
            timeTaken += 10 + distanceToPumps[i];
        } else {
            fuel -= distanceToPumps[i];
            timeTaken += distanceToPumps[i];
        }
    }
    return timeTaken / 10;
}
