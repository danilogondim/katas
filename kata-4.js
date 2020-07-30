// function that receives an array of instructor objects, and return the one that has the longest name.

const instructorWithLongestName = function(instructors) {
  let longestNameObj = instructors[0];
  let longestNameLen = longestNameObj.name.length;
  for (let instructor of instructors) {
    if (instructor.name.length > longestNameLen) {
      longestNameObj = instructor;
      longestNameLen = longestNameObj.name.length;
    }
  }
  return longestNameObj;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));