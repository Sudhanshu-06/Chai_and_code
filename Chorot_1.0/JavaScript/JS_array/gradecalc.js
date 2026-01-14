// 90-A
// 80-b
// 70-c
// 60>=d


function calulateGrdae(marks){

    if(marks >= 90){
        return  "A";
    }else if(marks >=80){
        return  "B";
    }else if(marks >=70){
        return  "C";
    }else if(marks >=60){
        return  "D";
        
    }else{
        return  "F";
    }

}

console.log(calulateGrdae(92)); 

