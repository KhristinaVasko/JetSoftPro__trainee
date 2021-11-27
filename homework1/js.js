console.log("-------  HW1  --------");

// 1. Compute the exponent of a number (using recursion);
//8^2 = 8 x 8 = 64

function exponent(x, n)
{
    if (n === 0) {
        return 1;
    } else {
        return x * exponent(x, n-1);
    }
};
console.log(exponent(8, 2));

// 2. Write functions min and max that will find min and max number in array using apply

let arr = [8, 6, 9, 11, 23];
console.log("Максимальний елемент масиву: " + Math.max.apply(null, arr));
console.log("Мінімальний елемент масиву: " + Math.min.apply(null, arr));

// 3. write a function displayCarDetails that will receive as argument ownerName 
//    and return a string with car registration number, branch and color. 
//    Please make examples for three different cars

function displayCarDetails(ownerName) {
    console.log(
        // `${this.registration_number} posesses ${this.branch}  ${this.color} of cacao and come from ${ownerName}`
        `Car is registered with number ${this.registration_number}, the brand is ${this.branch}, color is ${this.color} and car's owner is ${ownerName}`
    );
}

const car1 = { registration_number: "12986", branch: "Mazda", color: "red" };
const car2 = { registration_number: "14584", branch: "BMW", color: "black" };
const car3 = { registration_number: "35241", branch: "Audi", color: "grey" };
displayCarDetails.call(car1, "Andrew");
displayCarDetails.call(car2, "John");
displayCarDetails.call(car3, "Michel");

// 5.We want this code to log out the numbers 0, 1, 2, 3 in that order,
// but it doesn’t do what we expect - fix that(find two solutions)

//#1
for (let i = 0; i < 4; i++) {
    setTimeout(() => console.log(i), 0)
}

//#2
for (let i = 0; i < 4; i++) {
    (function (i) {
        setTimeout(() => console.log(i), 0)
    })(i)
}

// 4.We want this code to log out “hey amy”, but it logs out “hey arnold” - fix that 

function greet (person) {
    if (person.name ===  'amy' ) {
     console.log("hey amy");
    } else {
     console.log("hey arnold");
    }
    return true
  }
  const amy = {name: 'amy'}
  greet(amy);