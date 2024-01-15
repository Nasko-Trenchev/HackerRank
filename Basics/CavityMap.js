function cavityMap(grid) {
    // Write your code here

    const gridAsNumbers = grid.reduce((acc, curr) => {
        const splitted = curr.split("");
        acc.push(splitted)
        return acc;
    }, [])

    let coordinates = []
    for (let row = 1; row < grid.length - 1; row++) {

        for (let col = 1; col < grid.length - 1; col++) {

            let number = Number(gridAsNumbers[col][row]);

            if (number > Number(gridAsNumbers[col + 1][row])
                && number > Number(gridAsNumbers[col - 1][row])
                && number > Number(gridAsNumbers[col][row + 1])
                && number > Number(gridAsNumbers[col][row - 1])
            ) {
                coordinates.push([col, row])
            }
        }
    }

    coordinates.forEach(x => {
        gridAsNumbers[x[0]][x[1]] = "X";
    })

    const backtoString = gridAsNumbers.map(x => x.join(''))
    return backtoString;
}

console.log(cavityMap(['1112', '1912', '1892', '1234']))
console.log(cavityMap([['12'], ['12']]))