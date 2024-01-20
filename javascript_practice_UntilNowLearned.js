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


//creating checkbox uisng DOM 
let inputElement = document.createElement("input");
inputElement.type = "checkbox";
inputElement.id = "myCheckbox";

document.body.appendChild(inputElement);

let labelElement = document.createElement("label");
labelElement.setAttribute("for", "checkbox" );
labelElement.textContent = "Graduated";
document.body.appendChild(labelElement);

//sum of values of an array
let numbers = [1, 2, 3, 4, 5];

function calculateSum(array){
    let sum = 0;
    for(let i = 0; i < array.length;i++){
        sum+= array[i];
    }
    return sum;
}
let result = calculateSum(numbers);
console.log("sum:", result);
