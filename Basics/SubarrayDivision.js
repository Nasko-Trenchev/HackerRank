function birthday(s, d, m) {

    let total = 0;

    for (let index = 0; index < s.length - m +1; index++) {

        let sum = s.slice(index, index + m).reduce((acc, curr) => {
            return acc + curr;
        }, 0);

        if (sum === d) {
            total++;
        }
    }

    return total;
}

console.log(birthday([4, 1], 4, 1))