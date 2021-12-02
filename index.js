const addAllNumbers = (...numbers) => {
    if(!numbers.every((num) => typeof num === "number")){
        throw "All arguments must be numbers";
    }

    return numbers.reduce((a,b) => a + b);
}

console.log(addAllNumbers(1,2,3))
console.log(addAllNumbers(1,"2",3))