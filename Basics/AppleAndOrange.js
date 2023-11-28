function countApplesAndOranges(s, t, a, b, apples, oranges) {

    let totalApples = 0;
    let totalOranges = 0;

    apples.forEach(apple => {
        if (a + apple >= s && a + apple <= t) {
            totalApples++
        }
    });
    oranges.forEach(orange => {
        if (b + orange >= s && b + orange <= t) {
            totalOranges++
        }
    })

    console.log(totalApples)
    console.log(totalOranges)
}