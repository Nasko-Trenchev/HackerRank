function appendAndDelete(s, t, k) {
    // Write your code here
    if (k >= s.length + t.length) {
        return "Yes"
    }

    let matchingIdexes = 0;
    while (true) {
        if (!s[matchingIdexes] || !t[matchingIdexes]) {
            break;
        }
        if (s[matchingIdexes] === t[matchingIdexes]) {
            matchingIdexes++;
        }
        else {
            break;
        }
    }

    let total = s.length - matchingIdexes + t.length - matchingIdexes;

    if (total <= k && (k - total) % 2 === 0) {
        return "Yes"
    }
    else {
        return "No"
    }

}
console.log(appendAndDelete("hackerhappy", "hackerrank", 9))
