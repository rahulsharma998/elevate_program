const students = [
    { id: 1, name: "Alice", courseId: 201, score: 85 },
    { id: 2, name: "Bob", courseId: 202, score: 65 },
    { id: 3, name: "Charlie", courseId: 201, score: 90 },
    { id: 4, name: "David", courseId: 203, score: 75 }
  ];
  
  const courses = {
    201: { name: "Mathematics", instructor: "Dr. Smith" },
    202: { name: "Physics", instructor: "Dr. Brown" },
    203: { name: "Chemistry", instructor: "Dr. White" }
  };
  
//   Filter students who scored above 70.
//   Group students by course.
//   Sort students within each course by score (descending).
//   Combine student data with course data (e.g., course name and instructor).
//   Calculate the average score for each course.

const filteredstu=students.filter((stu)=>stu.score>70)
// console.log(filteredstu)
  
const groupedStudents=filteredstu.reduce((acc,n)=>{
    if(!acc[n.courseId]){
        acc[n.courseId]=[]
    }
    acc[n.courseId].push(n)
    return acc
},{})
// console.log(groupedStudents)
const sorting=groupedStudents.sort((a,b)=>b.score-a.score)
console.log(sorting)

// const total=groupedStudents.reduce((acc,n)=>acc+n.score,0)
// const avg= total/