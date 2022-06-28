let currentyear = new Date().getFullYear()

function getBirthYear(userAge) {
    let birthYear = Number(currentyear) - Number(userAge)
    console.log("you were born in the year: " + birthYear)
}

function getAge(yearOfBirth) {
    let age = Number(currentyear) - Number(yearOfBirth)
    console.log("You are " + age + " years old");
}


// io versions of previous functions so users can interact through the terminal...
function ioBirthYear() {
    console.log("How old are you?");
    process.stdin.once('data', (chunk) => {
        getBirthYear(Number(chunk));
        process.exit()
    });
}
function ioGetAge() {
    console.log("What year were you born?");
    process.stdin.once('data', (chunk) => {
        getAge(Number(chunk));
        process.exit()
    });
}
//remove comment tags on the functions you want to use
// getBirthYear(21)
// getAge(2001)
// ioBirthYear()
// ioGetAge()

