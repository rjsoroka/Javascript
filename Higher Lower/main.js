// This is the default limit
// var limit = 100;
// var limit = Number(prompt("Choose a limit for the range"));
function getLimit () {
    var limitInput = Number(prompt("Choose the biggest number for your guess (eg. 10, 100)"));
    return limitInput;
}
var limit = getLimit()
document.write("<h4> The range is 1 - " + limit + "</h4>");

// Generates a random number between 1 and limit
function randNumGen (limit) {
    var randNum = Math.floor((Math.random() * limit) + 1);
    return randNum;
}
var target = randNumGen(limit);

// Making a while loop so you can guess more than once
var notGuessed = true;
var counter = 0;
while (notGuessed) {
    counter++
    //Gets a guess from the user
    var guess = Number(prompt("What's the number?"));

    // Compares guess to the random number and gives a message
    if (guess > target) {
        document.write("Too high <br>");
        // document.write(target);
    } else if (guess < target) {
        document.write("Too low <br>");
        // document.write(target);
    } else {
        document.write("Congratulations! It took you " + counter + " tries and the number was: " + target + "<br>");
        notGuessed = false;
        // document.write(target);

        var restart = prompt("Go again? Y or N").toUpperCase();
        if (restart == "Y") {
            target = randNumGen(limit);
            counter = 0;
            notGuessed = true;

            // Asking if user wants a new limit
            var newLimit = prompt("New limit? Y or N").toUpperCase();
            if (newLimit == "Y") {limit = getLimit()}
            document.write("<h4> The range is 1 - " + limit + "</h4>");
        } else {
            notGuessed = false;
        }
    }
}