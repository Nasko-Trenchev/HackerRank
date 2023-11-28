function jumpingOnClouds(c, k) {

    let e = 100;
    let step = 0;

    while (true) {

        if ((step + k) % c.length === 0) {
            if (c[0] === 1) {
                e -= 3;
            }
            else {
                e -= 1;
            }
            return e;
        }

        if (c[(step + k) % c.length] === 1) {
            e -= 3;
        }
        else {
            e -= 1;
        }
        step += k;

    }

}

console.log(jumpingOnClouds([1, 1, 1, 0, 1, 1, 0, 0, 0, 0], 3))