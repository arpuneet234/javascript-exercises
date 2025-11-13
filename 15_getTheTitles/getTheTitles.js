const getTheTitles = function(obj) {
    let array_titles=[];
    for(let i=0;i<obj.length;i++){
        array_titles.push(obj[i].title);
    }
    return array_titles;

};

// Do not edit below this line
module.exports = getTheTitles;
