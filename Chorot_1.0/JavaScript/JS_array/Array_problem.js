// create an array conatining different types of teas.
const teas=["Green tea", "Black tea","Lemon tea","Ginger tea","Oolng tea"];
console.log(teas);

// Add "chamomile Tea " to the existing teas

teas.push("chamomile Tea");
console.log(teas);

// Remove "Oolng tea" from the list of teas.

const index= teas.indexOf("Oolng tea");
console.log(index);
if(index>-1){
    teas.splice(index,1)
}

// Filter the lsit to only include teas that are caffeinated.
const caffeinated = teas.filter((tea) => tea!== "Black tea");
console.log(caffeinated);

// Sort the lsit of teas in alphabetical order.
 console.log(teas.sort());

//  Usea for loop to print each type of teain the array.
for(let i=0; i<=teas.length; i++){
    console.log(teas[i]);
}

// Use a for loop to count how many teas are caffeinated(excluding "Black tea")

let caffeinatedMyTeas= 0;
for(let i=0; i<teas.length; i++){
    if(teas[i]!== "Black tea")
    caffeinatedMyTeas++;
}
console.log(caffeinatedMyTeas);

// Use a for loop to create a new array with all tea name in uppercase

const uppcaseTeas=[];
for(let i=0; i<teas.length; i++){
    uppcaseTeas.push(teas[i].toUpperCase())
}
console.log(uppcaseTeas);

// Use a for loop to find the tea with most characters.
let longestTea="";
for(let i=0; i<teas.length; i++){
    if(teas[i].length>longestTea.length){
        longestTea=teas[i]
    }
}
console.log(longestTea);

// Use a for loop to reverse the order of teas in the array
const reverseArray=[];
for(let i=teas.length-1; i>=0; i--){
    reverseArray.push(teas[i])
}
console.log(reverseArray);