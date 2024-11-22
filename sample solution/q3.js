module.exports = basketball; // DO NOT REMOVE

function basketball(scores) {
    let scoreA = 0; // Score for Ahmad
    let scoreB = 0; // Score for Benedict

    for (let play of scores) {
        // Extract the player and the points from each score entry
        const player = play[0]; // 'A' or 'B'
        const points = parseInt(play[1]); // Points scored (1 or 2)

        if (player === 'A') {
            scoreA += points;
        } else if (player === 'B') {
            scoreB += points;
        }

        // Check if a player has won
        if (scoreA >= 11 || scoreB >= 11) {
            if (Math.abs(scoreA - scoreB) >= 2) {
                return scoreA > scoreB ? 'A' : 'B';
            }
        }
    }

    // If no winner is found (this shouldn't happen with valid input)
    return null;
}

function basketball(scores) {
    return scores[scores.length - 1][0];
}

// Run your own tests here:
basketball(['A2', 'B1', 'A2', 'B2', 'A1', 'A2', 'A2', 'A2']);
