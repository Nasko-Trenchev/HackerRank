function compareTriplets(a, b) {

    let Alice = 0;
    let Bob = 0;
    for (let x = 0; x <= a.length; x++) {

        if (a[x] == b[x]) {
            continue;
        };

        if (a[x] > b[x]) {
            Alice++;
        }
        else {
            Bob++;
        }

    }
    return [Alice, Bob]
}