function kangaroo(x1, v1, x2, v2) {

    // let x1Jump = x1 + v1;
    // let x2Jump = x2 + v2;;

    // if (v2 >= v1) {
    //     return "NO";
    // }
    // else if (x1Jump == x2Jump) {
    //     return "YES"
    // }
    // else {
    //     while (x1Jump < x2Jump) {
    //         x1Jump += v1;
    //         x2Jump += v2;
    //         if (x1Jump == x2Jump) {
    //             return "YES"
    //         }
    //     }
    //     return "NO"
    // }

    if (v2 >= v1 || (x2 - x1) % (v2 - v1) != 0) {
        return "NO";
    }
    else {
        return "YES";
    }
}