
function staircase(n) {

    let result = "";
    let symbols = n - 1;

    for (let index = 0; index < n; index++) {

        for (let col = 0; col < n; col++) {
            if (col >= symbols) {
                result += "#"
            }
            else {
                result += " "
            }
        }
        result += '\n'
        symbols--;
    }
    console.log(result)
}

staircase(4)
