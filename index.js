function addAllNumbers(...nums) {
    if(!nums.every((num) => typeof num === "number")){
        throw "All arguments must be numbers";
    }


    return nums.reduce((a,b) => a + b);
}

console.log(addAllNumbers(1,2,3))