const palindromes = function (string) {
   let string_array=[];
   string=string.toLowerCase();
   for(let i=0;i<string.length;i++){
    if((string[i]>='a'&&string[i]<='z')||(string[i]>='A'&&string[i]<='Z')||(string[i]>='1'&&string[i]<='9')){
        string_array.push(string[i]);
    }
   }
   let n=string_array.length;
   let i=0; j=n-1;
   while(i<=j){
    if(string_array[i]!=string_array[j])return false;
    i++;j--;
   }
   return true;


};

// Do not edit below this line
module.exports = palindromes;
