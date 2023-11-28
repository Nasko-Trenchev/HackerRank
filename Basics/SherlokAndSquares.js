function squares(a, b) {
    // Write your code here

    // const newA = Math.sqrt(a) % 1 === 0 ? a - 1 : a;
    // const newB = Math.sqrt(b) % 1 === 0 ? b + 1 : b;
    // return (Math.floor(Math.sqrt(newB)) - Math.floor(Math.sqrt(newA)))
    let totalSquareIntigers = 0;

    for (let index = a; index <= b; index++) {

        if (Math.sqrt(index) % 1 === 0) {
            totalSquareIntigers++;
        }
    }

    return totalSquareIntigers;
}

console.log(squares(3,9))