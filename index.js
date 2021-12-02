function sum(...nums) {
    if(!nums.every((num) => Number.isNumber(num))) {
        throw "All arguments must be numbers";
    }
    
    return nums.reduce((sum, num) => sum + num);
}

sum(1,2,3)