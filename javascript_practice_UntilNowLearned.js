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
