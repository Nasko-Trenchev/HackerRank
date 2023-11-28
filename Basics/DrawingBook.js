function pageCount(n, p) {

    const startMoves = Math.floor(p / 2);
    let endMoves = 0;
    if (n % 2 == 0) {
        endMoves = Math.floor((n + 1 - p) / 2);

    }
    else {
        endMoves = Math.floor((n - p) / 2);
    }

    return startMoves < endMoves ? startMoves : endMoves;
}

console.log(pageCount(5, 4))