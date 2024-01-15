function fairRations(B) {
    // Write your code here
    let numberOfLeaves = 0;

    for (let index = 0; index < B.length; index++) {

        if (B[index] % 2 === 0) {
            continue;
        }
        else {
            if (index === B.length - 1) {
                return "NO"
            }
            B[index] += 1;
            B[index + 1] += 1;
            numberOfLeaves += 2;
        }

    }
    return numberOfLeaves;
}

console.log(fairRations([1,2]))