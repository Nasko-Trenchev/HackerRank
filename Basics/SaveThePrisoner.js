function saveThePrisoner(n, m, s) {
    // Write your code here

    return (s - 1 + m) % n === 0 ? n : (s - 1 + m) % n;

}

console.log(saveThePrisoner(5, 2, 2))

