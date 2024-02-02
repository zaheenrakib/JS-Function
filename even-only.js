/*
*create a function that will return only the even numbers
*return the sum of even numbers
*/

function evenNumberOnly(numbers){
    const evens = [];
    for (const number of numbers){
        if (number % 2 === 0){
            console.log(number);
            evens.push(number);
        }
        
    }
    return evens;
}

const numbers = [5,7,90,34,36];
// const evens = evenNumberOnly(numbers);
// console.log('even number are',evens);

function sumOfEvenNumber(numbers){
    let sum = 0;
    for (const number of numbers){
        if(number % 2 === 0){
            console.log(number);
            sum = sum + number;
        }
        
    }
    return sum;
}

const sum = sumOfEvenNumber(numbers);
console.log('sum of the even numbers is',sum);