// function that, given a list of instructors, returns a single object to organize
// them based on their course.

const organizeInstructors = function (instructors) {
  let courses = {};
  let names = [];
  for (let instructor of instructors) {
    if (courses[instructor.course] === undefined) {
      courses[instructor.course] = [];
    }
    courses[instructor.course].push(instructor.name);
  }
  return courses;
};

console.log(organizeInstructors([
  { name: "Samuel", course: "iOS" },
  { name: "Victoria", course: "Web" },
  { name: "Karim", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(organizeInstructors([
  { name: "Brendan", course: "Blockchain" },
  { name: "David", course: "Web" },
  { name: "Martha", course: "iOS" },
  { name: "Carlos", course: "Web" }
]));