function timeConversion(s) {

    const splitted = s.split(":");
    const timeZone = splitted[2].slice(2, 4);
    let hours = Number(splitted[0]);
    let minutes = splitted[1];
    let seconds = splitted[2].slice(0, 2);

    if (timeZone === "AM") {
        if (hours === 12) {
            return `00:${minutes}:${seconds}`
        }
        else {
            return `${splitted[0]}:${minutes}:${seconds}`
        }
    }

    if (timeZone === "PM" && hours !== 12) {
        return `${hours + 12}:${minutes}:${seconds}`
    }

    return `${hours}:${minutes}:${seconds}`
}

console.log(timeConversion("06:01:00AM"))
