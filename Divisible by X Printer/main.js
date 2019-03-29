let range = 83; //Range through which to loop through
let num = 4;    //Number that is being divided by

for (i = 1; i < range + 1; i++) {
    if (i % num == 0) {
        document.write(`${i} <br>`);
    }

}