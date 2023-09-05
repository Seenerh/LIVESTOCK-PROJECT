function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function main() {
    const age = parseInt(prompt("Please enter your age:"));

    if (isNaN(age)) {
        console.log("Invalid input. Please enter a valid number.");
    } else {
        if (isPrime(age)) {
            alert(age + " is a prime age!");
        } else {
            alert(age + " is not a prime age.");
        }
    }
}

    main();

    let school = null;
    console.log(typeof school);
