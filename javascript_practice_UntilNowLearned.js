//making a person object 
//Make a person Object
function makePersonObject(id, name, email) {
    return {
        id: id,
        name: name,
        email: email
    };
}

// Example usage:
var person = makePersonObject(1, 'John Doe', 'john@example.com');
console.log(person);

// make an array
function makeArray(num1, num2, num3){
    return [num1, num2, num3]
}
var CreatedArray = makeArray(1, 2, 3);
console.log(CreatedArray);
