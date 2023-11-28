function circularArrayRotation(a, k, queries) {
    // Write your code here

    for (let index = 0; index < k; index++) {
        const numberToInsert = a.pop();
        a.unshift(numberToInsert)
    }

    let final = [];
    queries.forEach(element => {
        final.push(a[element])
    });

    return final;
}