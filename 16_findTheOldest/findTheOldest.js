const findTheOldest = function(arr) {
    let max_pointer=0;
    let max_age=-1;

    for(let i=0;i<arr.length;i++){
        let birth=arr[i].yearOfBirth;
        let death;
        if(arr[i].yearOfDeath==undefined){
            let currentDate=new Date();
            let currentYear=currentDate.getFullYear();
            death=currentYear;
        }
        else death=arr[i].yearOfDeath;

        age=death-birth;
        if(age>max_age){
            max_age=age;
            max_pointer=i;
        }


        




    }


    return arr[max_pointer];






};

// Do not edit below this line
module.exports = findTheOldest;
