
// TODO have error pop up with NaN as well as other types of non-numbers
function addAllNumber(...nums) {
    if(!nums.every((num) => typeof num === "number")) {
        throw "All arguments must be numbers";
    }
    
    return nums.reduce((sum, num) => sum + num);
}

addAllNumber(1,2,3)