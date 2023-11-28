function getTotalX(a, b) {
    let count = 0
    let min = Math.max(...a)
    let max = Math.min(...b)
    for (let i = min; i <= max; i++) {
        if ((a.every(e => i % e === 0)) && b.every(e => e % i === 0)) {
            count++;
        }
    }
    return count
}