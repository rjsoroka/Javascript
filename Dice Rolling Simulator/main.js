function diceRoller(sides, dice) {
    sides = Number(prompt("How many sides per die?"));
    dice = Number(prompt("How many dice?"));
    // sides = 6;
    // dice = 4;

    // New array full of 0s from 1 to sides that will be used to count how many times a number appears
    var counter = new Array(sides).fill(0);
    // console.log(counter);

    var results = [];
    // Rolls dice from 1 to sides
    for (var i = 0; i < dice; i++) {
        var result = Math.floor(Math.random() * sides) + 1;
        // console.log(result);
        // Shows what the rolls were
        results.push(result);
        // console.log(results);

        counter[result - 1]++;
        // console.log(counter);
    }
    document.write(`Results for ${dice} rolls of dice with ${sides} sides: <br> ${results} <br> <br>`);

    // Prints each element next to its index
    counter.forEach(function(item, index){
        document.write(`${index+1}: ${item} <br>`)
    })
    return counter;
}
diceRoller();

// document.write(arr);
// document.write(typeof arr[1]);

/* 
Roll dice times between 1 and sides
Keep track of each number between 1 and sides
Store number count in array
Output array

Here is how many of each number was rolled:
1: 
2: 
3: 
4:
etc.

*/