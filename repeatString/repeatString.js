const repeatString = function(str, amount) {
    let newStr = "";
    while (amount !==0){
        newStr+=str;
        amount--;
    }
    return newStr;
}

module.exports = repeatString
