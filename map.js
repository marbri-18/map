  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for(let num of nums){
  results.push(num * 2);
}
console.log(results);


// Using map()


//Example one: Use Map with callback function called from within map method parameters.
const multByTwo = function (num){
  return num * 2
}

const mapResults = nums.map(multByTwo);
console.log(mapResults);



//Example two: Use Map with callback function within map method parameters.
const simplified = nums.map(function(num){return num * 2});
console.log(simplified);



//Example three: Use Map with callback arrow function within map method parameters.
const arrow = nums.map(num => num * 2);
console.log(arrow);




// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

// iterate object with for loop
const studentsWithIds = [];
for( let student of students){
  studentsWithIds.push([student.id, student.name]);

}
console.log(studentsWithIds);

// iterate object with map method
const mapStudentsWithIds = students.map(student => [student.id, student.name]);

console.log(mapStudentsWithIds);
