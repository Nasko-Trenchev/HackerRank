function designerPdfViewer(h, word) {
    // Write your code here

    let maxHeigth = 0;

    word.split('').forEach((char, index) => {
        const letter = word.charCodeAt(index)

        if (h[letter - 97] > maxHeigth) {
            maxHeigth = h[letter - 97]
        }
    });

    return maxHeigth * word.length;
}

designerPdfViewer(5, 'abc')