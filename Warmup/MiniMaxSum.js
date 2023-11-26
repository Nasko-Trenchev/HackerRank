function miniMaxSum(arr) {

    const min = Math.min(...arr);
    const max = Math.max(...arr);

    const sum = arr.reduce((acc, curr) => {
        return acc + curr;
    }, 0)

    console.log(`${sum - max}`,`${sum - min}`)
}

miniMaxSum([1, 2, 3, 4, 5])