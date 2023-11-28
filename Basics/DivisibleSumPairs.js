function divisibleSumPairs(n, k, ar) {

    let pairs = 0;

    for (let x = 0; x < ar.length - 1; x++) {

        for (let y = x + 1; y < ar.length; y++) {

            if (ar[x] + ar[y] % k == 0) {
                pairs++;
            }
        }

    }

    return pairs;
}