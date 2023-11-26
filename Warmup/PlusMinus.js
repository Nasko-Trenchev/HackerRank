function plusMinus(arr) {

    let positive = 0;
    let negative = 0;
    let zeroes = 0;

    arr.forEach(number => {

        if (number > 0) {
            positive++;
        }
        else if (number < 0) {
            negative++;
        }
        else {
            zeroes++
        }
    });

    console.log((positive/arr.length).toFixed(6))
    console.log((negative/arr.length).toFixed(6))
    console.log((zeroes/arr.length).toFixed(6))

}