function evenSizedString(str){
    const size = str.length;
    console.log(str,size);
    if (size % 2 === 0){
        console.log('Even Size');
        return true;
    }
    else{
        console.log('Odd Size');
        return false;
    }
}

// evenSizedString('Dhaka');
// evenSizedString('faka');

function doubleOrTriple(number, doDouble){
    if(doDouble === true){
        const result = number *2;
        return result;
    }
    else{
        const result = number *3;
        return result;
    }
}
// console.log(doubleOrTriple(5, true));
// console.log(doubleOrTriple(5,false));



//array
function numberOfElements(numbers){
    const len = number.length;
    return len;
}

// numberOfElements([12,45,78,90,123,])

function getAge(person){
    const age = person.age;
    return age;
}