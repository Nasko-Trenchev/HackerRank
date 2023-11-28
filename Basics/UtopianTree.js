function utopianTree(n) {

    let initialSize = 1;

    for (let index = 1; index <= n; index++) {

        if (index % 2 == 1) {
            initialSize *= 2;
        }
        else {
            initialSize += 1;
        }

    }

    return initialSize;
}

console.log(utopianTree(4))