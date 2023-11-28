function getMoneySpent(keyboards, drives, b) {

    let maxSum = -1;
    for (let x = 0; x < keyboards.length; x++) {
        for (let y = 0; y < drives.length; y++) {
            if (maxSum < keyboards[x] + drives[y] && keyboards[x] + drives[y] <= b) {
                maxSum = keyboards[x] + drives[y];
            }

        }
    }
    return maxSum;
}