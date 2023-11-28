function migratoryBirds(arr) {

    let occurances = arr.reduce((acc, curr) => {
        if (!acc[curr]) {
            acc[curr] = 1;
        }
        else {
            acc[curr]++;
        }
        return acc;
    }, {})

    let final = 0;
    let sum = 0;

    Object.entries(occurances).sort((a, b) => a[0] - b[0]).forEach(([key, value]) => {
        if (value > sum) {
            sum = value;
            final = key;
        }
    })

    return final;

}

console.log(migratoryBirds([1, 1, 2, 2, 3]))