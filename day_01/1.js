// const employees = [
//     { id: 1, name: "Alice", department: "HR", salary: 50000, status: "active" },
//     { id: 2, name: "Bob", department: "Engineering", salary: 80000, status: "inactive" },
//     { id: 3, name: "Charlie", department: "HR", salary: 60000, status: "active" },
//     { id: 4, name: "David", department: "Engineering", salary: 90000, status: "active" },
//     { id: 5, name: "Eve", department: "Marketing", salary: 70000, status: "active" }
//   ];
  
//   const departmentBudgets = {
//     HR: 150000,
//     Engineering: 200000,
//     Marketing: 100000
//   };
// //   Filter active employees (status: "active").
// // Group employees by department.
// // Sort employees within each department by salary (descending).
// // Combine employee data with department budget data.
// // Calculate the total salary for each department.
// // Check if the total salary exceeds the department budget
  
// const empStatus= employees.filter((emp)=>emp.status==="active")
// // console.log(empStatus)  
//  const empDep=empStatus.reduce((acc,n)=>{
//     if(!acc[n.department]){
//         acc[n.department]=[]
//     }
//     acc[n.department].push(n)
//     return acc
//  },{})
// const sortedBySalary=empDep.sort((a,b)=>b.salary-a.salary)

const employees = [
  { id: 1, name: "Alice", department: "HR", salary: 50000, status: "active" },
  { id: 2, name: "Bob", department: "Engineering", salary: 80000, status: "inactive" },
  { id: 3, name: "Charlie", department: "HR", salary: 60000, status: "active" },
  { id: 4, name: "David", department: "Engineering", salary: 90000, status: "active" },
  { id: 5, name: "Eve", department: "Marketing", salary: 70000, status: "active" }
];

const departmentBudgets = {
  HR: 150000,
  Engineering: 200000,
  Marketing: 100000
};

// Filter active employees (status: "active").
// Group employees by department.
// Sort employees within each department by salary (descending).
// Combine employee data with department budget data.
// Calculate the total salary for each department.
// Check if the total salary exceeds the department budget.
const activeEmp=employees.filter(emp=>emp.status==="active")
// console.log(activeEmp)
const group=activeEmp.reduce((acc,n)=>{
  if(!acc[n.department]){
    acc[n.department]={department:n.department, employees:[],totalSalary:0}
  }
  acc[n.department].employees.push({name:n.name,salary:n.salary})
  acc[n.department].totalSalary+=n.salary
  return acc
},{})
// console.log(group)
const finalOp=Object.values(group).map(el=>{
  el.employees.sort((a,b)=>b.salary-a.salary);
  el.budget=departmentBudgets[el.department];
  el.isOverBudget=el.totalSalary>el.budget;
  return el;
});
console.log(finalOp)
