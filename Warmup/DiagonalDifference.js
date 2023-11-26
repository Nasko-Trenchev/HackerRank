function diagonalDifference(arr) {

    let firstDiagonal = 0;
    let seconDiagonal = 0;

    for (let row = 0; row < arr.length; row++) {

        for (let col = row; col < arr.length; col++) {
            firstDiagonal += arr[row][col];
            seconDiagonal += arr[row][arr.length - 1 - col]
            break;
        }
    }
    return Math.abs(firstDiagonal - seconDiagonal);
}
