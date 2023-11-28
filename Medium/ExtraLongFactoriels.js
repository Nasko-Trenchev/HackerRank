function extraLongFactorials(n) {
    // Write your code here 
    let bigInt = BigInt(1);

    for (let index = 1; index <= n; index++) {

        bigInt *= BigInt(index);

    }

    console.log(bigInt.toString());
}

extraLongFactorials(25)
