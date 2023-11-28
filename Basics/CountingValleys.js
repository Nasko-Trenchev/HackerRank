function countingValleys(steps, path) {

    let level = 0;
    let totalValeys = 0;

    path.split('').forEach(element => {

        if (level === 0 && element === "D") {
            totalValeys++;
        }

        if (element === "U") {
            level++;
        }
        else {
            level--;
        }
    });

    return totalValeys;
}

console.log(countingValleys(8,["D", "D", "U", "U", "U", "U", "D", "D"]))