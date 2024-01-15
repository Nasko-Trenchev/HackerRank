function flatlandSpaceStations(n, c) {

    let maxNum = 0;

    for (let index = 0; index < n; index++) {

        if (c.indexOf(index) === -1) {

            const minDistance = [];
            for (let x = 0; x < c.length; x++) {

                minDistance.push(Math.abs(c[x] - index))
            }

            const maxNumber = Math.min(...minDistance)
            if (maxNumber > maxNum) {
                maxNum = maxNumber
            }
        }

    }

    return maxNum;

}

console.log(flatlandSpaceStations(3, [1]))