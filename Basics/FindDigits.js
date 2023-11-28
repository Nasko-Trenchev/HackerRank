function findDigits(n) {
    // Write your code here

    const numberAsStringArray = n.toString().split('');
    let total = 0;

    for (let index = 0; index < numberAsStringArray.length; index++) {

        if (n % Number(numberAsStringArray[index]) == 0){
            total++;
        }
    }
    return total;
}

console.log(findDigits(111))