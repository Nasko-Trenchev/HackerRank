function sockMerchant(n, ar) {

    let count = 0;

    while (ar.length > 0) {
        let number = ar[0];
        ar.shift();
        const occurance = ar.indexOf(number);
        if (occurance !== -1) {
            ar.splice(occurance, 1);
            count++;
        }
    }
    return count;
}

console.log(sockMerchant(5, [10, 20, 20, 10, 10, 30, 50, 10, 20]))