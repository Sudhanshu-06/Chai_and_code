let myArray=[1,4,2,6,7,9];
let sum=0;
for(let i=0; i<myArray.length; i++){
    sum+=myArray[i];
}

console.log("Sum of all elements in the array is: ", sum);

function sumfac(numbers){
    let sum=0;
    for(let i=0; i<numbers.length; i++){
        sum+=numbers[i];
    }
    return sum;
}
console.log(sumfac(myArray));