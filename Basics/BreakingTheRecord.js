function breakingRecords(scores) {

    let overTheRecord = scores[0];
    let belowTheRecord = scores[0];

    let overTheRecordCount = 0;
    let belowTheRecordCount = 0;

    scores.forEach(score => {

        if (score > overTheRecord) {
            overTheRecord = score;
            overTheRecordCount++;
        }

        if (score < belowTheRecord) {
            belowTheRecord = score;
            belowTheRecordCount++;
        }

    });
    return [overTheRecordCount, belowTheRecordCount];

}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]))