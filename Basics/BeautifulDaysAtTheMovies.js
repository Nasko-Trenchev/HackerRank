function beautifulDays(i, j, k) {
    // Write your code here
    let finalResult = 0;

    for (let index = i; index <= j; index++) {

        let number = '';
        String(index).split('').reverse().forEach(element => {
            number += element;
        });

        const difference = index - Number(number);

        if (difference % k === 0) {
            finalResult++;
        }
    }

    return finalResult;

}

console.log(beautifulDays(20, 23, 6))