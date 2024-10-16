console.log('in-class-4.js loaded!');

const ar = [1, 2, 3, 4, 5];

for (let i = 0; i < ar.length; i++) {
    if (ar[i] === 1 || ar[i] === 3 || ar[i] === 5) {
        const templateLiteral = `${ar[i]} is odd!`;
        console.log(templateLiteral);
    } else if (ar[i] === 2 || ar[i] === 4) {
        const templateLiteral = `${ar[i]} is even!`;
        console.log(templateLiteral);
    }
}
