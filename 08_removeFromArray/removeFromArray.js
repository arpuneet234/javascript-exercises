const removeFromArray = function(...args) {
    let arr=args[0];
    
    let k=0;

    let mySet=new Set(); 
    for(let i=1;i<args.length;i++){
        mySet.add(args[i]);
    }

    for(let i=0;i<arr.length;i++){
        if(!mySet.has(arr[i]))arr[k++]=arr[i];  
       
    }
    arr.length=k;

    return arr;
    
};

// Do not edit below this line
module.exports = removeFromArray;
