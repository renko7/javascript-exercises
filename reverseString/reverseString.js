const reverseString = function(str) {
    let newStr = "";
    for(let i=str.length-1; i > -1; i--){
        newStr+=str[i];
    }
    return newStr;
}

module.exports = reverseString
