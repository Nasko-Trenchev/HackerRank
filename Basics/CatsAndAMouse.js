function catAndMouse(x, y, z) {

    const catA = Math.abs(x - z);
    const catB = Math.abse(y - z);

    if (catA === catB) {
        console.log("Mouse C")
    }
    else if (catA > catB) {
        console.log("Cat A")
    }
    else {
        console.log("Cat B")
    }
}