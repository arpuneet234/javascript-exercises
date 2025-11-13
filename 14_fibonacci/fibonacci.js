const fibonacci = function(num) {
    num=parseInt(num);

    if(num<0)return "OOPS";

    let first=1;
    let second=1;
    if(num==1||num==2)return 1;
    let result =0;
    for(i=0;i<num-2;i++){
        result=first+second;
        first=second;
        second=result;
        
    }

    return result;

};

// Do not edit below this line
module.exports = fibonacci;
