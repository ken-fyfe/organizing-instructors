// organize instructors into categories
const organizeInstructors = function(courseInstructors) {
  console.log('original data');
  console.log(courseInstructors);

  //convert
  // var instructorObject = {};
  // for (let i = 0; i < instructors.length; i++) {
  //   instructorObject[instructors[i].name] = instructors[i].course;
  // }
  // var instructorObject = {};
  // for (let i = 0; i < courseInstructors.length; i++) {
  //   instructorObject[courseInstructors[i].course] = courseInstructors[i].name
  //   //instructorObject["course"] = instructors[i].course;
  // }
  let courseList = [];
  courseInstructors.forEach(instructor => {  // determine the courses
    if (!courseList.includes(instructor.course)) {
      courseList.push(instructor.course);
    }
  });
  console.log('courseList :', courseList);

  const masterList = {};
  for (const course of courseList) {
    const instructorList = [];
    for (const instructor of courseInstructors) {
      if (instructor.course === course) {
        instructorList.push(instructor.name);
      }
    }
    masterList[course] = instructorList;
  }
  return masterList;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));

console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));