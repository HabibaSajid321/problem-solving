// Q9  Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax.

let userInput = parseInt(prompt("Enter comsumes units"));
let unitsGT100 = userInput*0.1 +userInput;
let unitGT200 = userInput*0.15 +userInput
let unitGT500 = userInput*0.25 +userInput
if (userInput > 100){
console.log(unitsGT100)
}
else if (userInput > 200){
    console.log(UnitGT200)
}
else if (userInput > 500){
    console.lof(unitGT500)
}
else{
    console.log("invalid")
}

// volume of cube 
function cube(num){
    return num ** 3;
}
let result = cube(7)
console.log(result)


// Write a TypeScript function called maximum that takes three numbers as input and returns the maximum of the three. */
    function maxIdentifier(num1,num2,num3){
        let max = num1;
        for (let num of [num2,num3]){
            if (num > max){
                max = num
            }
        }
        return max;
    }
    
    let result2 = maxIdentifier(4,7,90);
    console.log(result2);
    