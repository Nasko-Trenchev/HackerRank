function permutationEquation(p) {
    // Write your code here

    let final = []
    for (let index = 1; index <= p.length; index++) {

        const pIndex = p.indexOf(index) + 1;
        const indexInArray = p.indexOf(pIndex) + 1;
        final.push(indexInArray)
    }
    return final;
}

console.log(permutationEquation([5,2,1,3,4]))