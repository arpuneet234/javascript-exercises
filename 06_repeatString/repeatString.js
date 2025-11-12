const repeatString = function(str,n) {
    let repeatedString="";
    if(n<0)return "ERROR"
     
    for(let i=0;i<n;i++){
        repeatedString+=str;
    }
    return repeatedString;

};

// Do not edit below this line
module.exports = repeatString;
