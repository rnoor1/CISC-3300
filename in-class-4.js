console.log("in-class-4.js loaded!");

const array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
       if ( (array[i]==2) ||(array[i]==4) ) {
        const templateLiteral = `${i} is even!`
        console.log(templateLiteral)}
    else if ( (array[i]==1)||(array[i]==3)|| (array[i]==5)) { 
        const templateLiteral = `${i} is odd!`
        console.log(templateLiteral)
    }
}
