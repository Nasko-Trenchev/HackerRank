function libraryFine(d1, m1, y1, d2, m2, y2) {
    // Write your code here
    const firstDate = new Date(y1, m1, d1)
    const secondDate = new Date(y2, m2, d2)

    const lateness = (firstDate.getTime() - secondDate.getTime()) / (1000 * 3600 * 24);

    if (lateness <= 0) {
        return 0;
    }
    else if (y1 > y2) {
        return 10000;
    }
    else if (m1 > m2) {
        return 500 * (m1 - m2);
    }
    else {
        return 15 * (d1 - d2)
    }


}

console.log(libraryFine(5, 8, 2019, 5, 7, 2018))
