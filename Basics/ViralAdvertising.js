function viralAdvertising(n) {

    let shared = 5;
    let totalLikes = 0;
    for (let index = 0; index < n; index++) {
        const likes = Math.floor(shared / 2);
        shared = likes * 3;
        totalLikes += likes;
    }
    return totalLikes;
}

console.log(viralAdvertising(3))
