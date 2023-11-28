function repeatedString(s, n) {
    // Write your code here

    const remainingChars = n % s.length;

    const aOccuranceInString = s.match(/a/g).length;
    let total = BigInt(Math.floor(n / s.length) * aOccuranceInString);

    if (remainingChars != 0) {
        let occurancesInRemainingChars = BigInt(s.substring(0, remainingChars).match(/a/g).length);
        return (total + occurancesInRemainingChars).toString();
    }
    return total.toString();

}

console.log(repeatedString('abcac', 10))