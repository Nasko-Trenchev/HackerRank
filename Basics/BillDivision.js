function bonAppetit(bill, k, b) {

     bill.splice(k, 1);

    const sum = bill.reduce((acc, curr) => acc + curr, 0);

    const final = Math.abs(sum / 2 - b);

    if (final == 0) {
        console.log("Bon Appetit");
    }
    else {
        console.log(final)
    }
}

console.log(bonAppetit([3, 10, 2, 9], 1, 12))