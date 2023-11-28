function pickingNumbers(a) {

    let length = 1;
    let totalLength = 0;

    const b = a.sort((b, a) => a - b);

    for (let index = 0; index < b.length - 1; index++) {

        for (let y = index + 1; y < b.length; y++) {

            if (Math.abs(b[index] - b[y]) <= 1) {
                length++
            }
            if (totalLength < length) {
                totalLength = length;
            }
        }
        length = 1;

    }

    return totalLength;

}

console.log(pickingNumbers([4, 6, 5, 3, 3, 1]))