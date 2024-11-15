try {
    let number = -5;
    
    if (number < 0) {
        throw "Number can't be negative!";
    }

    console.log("Number is valid:", number);
} catch (error) {
    console.log("Caught an exception:", error);
}
