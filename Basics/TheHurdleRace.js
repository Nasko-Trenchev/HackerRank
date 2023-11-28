function hurdleRace(k, height) {
    // Write your code here
    const maxHeigth = Math.max(...height);

    return maxHeigth > k ? maxHeigth - k : 0
}

console.log(hurdleRace(1, [1, 2, 3, 3, 2]))