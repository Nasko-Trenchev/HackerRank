function birthdayCakeCandles(candles) {

    const maxCandleHeight = Math.max(...candles);

    const numberOfCandles = candles.reduce((acc, curr) => {

        if (curr === maxCandleHeight) {
            return acc + 1;
        }
        return acc;
    }, 0)
    return numberOfCandles;
}

console.log(birthdayCakeCandles([4, 4, 1, 3]))