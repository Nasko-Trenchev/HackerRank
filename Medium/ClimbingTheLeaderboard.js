///Copy-pasted - learned BinarySearch - 


function climbingLeaderboard(scores, alice) {
    let result = [];
    let uniqueScores = [...new Set(scores)];
    for (const score of alice) {
        if (score >= uniqueScores[0]) {
            result.push(1);
        } else if (score < uniqueScores[uniqueScores.length - 1]) {
            result.push(uniqueScores.length + 1);
        } else {
            result.push(rankBinarySearch(score, uniqueScores));
        }
    }
    return result;
}
function rankBinarySearch(score, uniqueScores) {
    let start = 0;
    let end = uniqueScores.length - 1;
    while (true) {
        let mid = Math.floor((start + end) / 2);
        // base cases
        if (uniqueScores[mid] === score) {
            return mid + 1;
        } else if (uniqueScores[mid] > score && uniqueScores[mid + 1] < score) {
            return mid + 2;
        } else if (uniqueScores[mid] < score && uniqueScores[mid - 1 > score]) {
            return mid - 1;
        }
        // recursion
        if (score < uniqueScores[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
}

function myImplementation(scores, ranks) {

    const result = [];

    const onlyUniqueScores = [...new Set(scores)]

    for (const rank of ranks) {

        if (rank > onlyUniqueScores[0]) {
            result.push(1)
        }
        else if (rank < onlyUniqueScores[onlyUniqueScores.length - 1]) {
            result.push(onlyUniqueScores.length - 1)
        }
        else {

        }
    }
    function binarySearch(score, uniqueScores) {
        let start = 0;
        let end = uniqueScores.length - 1;

        while (true) {
            let mid = Math.floor((start + end) / 2)

            if (uniqueScores[mid] === score) {
                result.push(mid + 1)
            }
            else if (uniqueScores[mid] > score && uniqueScores[mid + 1] < score) {
                return mid + 2;
            } else if (uniqueScores[mid] < score && uniqueScores[mid - 1 > score]) {
                return mid - 1;
            }

            //recursion
            if (score < uniqueScores[mid]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
}

climbingLeaderboard([100, 90, 90, 80], [70, 80, 105])