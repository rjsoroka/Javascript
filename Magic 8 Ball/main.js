// Array of possible answers. Gotten from official Magic 8-Ball Wikipedia page.
var answers = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes - definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful.",
];

// Gets a question from the user
function getQuestion () {
    var input = prompt("Ask a question")
    return input;
}

// Generaters a random number between 0-19. The limit controls the range of numbers.
var limit = 19;
function randomNumber (limit) {
    var number = Math.floor(Math.random() * limit);
    return number;
};

// Loops the program based on user input (Y or N)
var play = true;
while (play) {
    // Calls getQuestion funciton
    var question = getQuestion();

    // Write a random answer to the document
    // document.write(answers[randomNumber(limit)] + "<br>");

    // Create a popup with a random answer
    alert(`
    You asked: ${question}
    ${answers[randomNumber(limit)]}`);

    var goAgain = prompt("Go again? Y/N").toUpperCase();
    if (goAgain == "N") {
        play = false;
    }
}

var question = "dicks";
var weird = typeof question;
document.write(weird);
document.write(typeof weird);

// ------------------------------------------------------------------------------
// Add cathcers for strange inputs