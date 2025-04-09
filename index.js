//Write a JavaScript function that takes an array of strings and returns a new array with the length of each string.
function lengthOfString(array){
    return array.map(item => item.length);
}

console.log(lengthOfString(["agdhd","fdjj"]));

// Given an array of numbers, write a function that filters out and returns only the even numbers.
function printoutEven (numbers){
  let nums=numbers.filter(num => num%2==0);
        return nums;
    }

console.log(`The even numbers are ${printoutEven([2,3,5,4])}`);


// Create a function that takes an array of student objects with name and score properties and returns a new array containing only the names of students who scored above 75.
function isAbove75(students){
    if (students.score > 75)
        return students.name;
    };
  

function getTopStudents(students) {
  return students
    .filter(student => student.score > 75)
    .map(student => student.name);
}




// Write a function that accepts an array of numbers and returns a new array with each number squared using the map() method.
function tosquareNumbers(numbers) {
  return numbers.map(num => num * num);
}
const numbers = [4,];
console.log(tosquareNumbers(numbers));

//Write a JavaScript function that takes an array of mixed data types and returns a new array containing only the string elements, all converted to uppercase.
function printUppercaseStrings(arr) {
  return arr
    .filter(item => typeof item === 'string')
    .map(str => str.toUpperCase());
}
console.log("Uppercase Strings:", printUppercaseStrings(["hello", 123, true, "world"]));