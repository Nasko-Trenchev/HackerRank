function cutTheSticks(arr) {
    // Write your code here

    let final = [arr.length];
    while (arr.length > 0) {
        const shortestStick = Math.min(...arr)
        arr = arr.map(stick => stick - shortestStick).filter(x => x !== 0)
        if (arr.length > 0) {
            final.push(arr.length)
        }
    }
    return final;
}

console.log(cutTheSticks([5, 4, 4, 2, 2, 8]))