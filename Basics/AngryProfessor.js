function angryProfessor(k, a) {
    // Write your code here

    return a.filter(time => time <= 0).length >= k ? "NO" : "YES";
}

console.log(angryProfessor(3, [-2, -1, 0, 1, 2])) 