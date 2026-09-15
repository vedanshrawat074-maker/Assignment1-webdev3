let operation = process.argv[2];
let a = Number(process.argv[3]);
let b = Number(process.argv[4]);

if (operation === "add") {
    console.log("Result:", a + b);
}
else if (operation === "sub") {
    console.log("Result:", a - b);
}
else if (operation === "mul") {
    console.log("Result:", a * b);
}
else if (operation === "div") {
    if (b === 0) {
        console.log("Cannot divide by zero");
    } else {
        console.log("Result:", a / b);
    }
}
else {
    console.log("Invalid operation");
}