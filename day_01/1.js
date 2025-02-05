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
//   Filter active employees (status: "active").
// Group employees by department.
// Sort employees within each department by salary (descending).
// Combine employee data with department budget data.
// Calculate the total salary for each department.
// Check if the total salary exceeds the department budget
  
const empStatus= employees.filter((emp)=>emp.status==="active")
// console.log(empStatus)  
 const empDep=empStatus.reduce((acc,n)=>{
    if(!acc[n.department]){
        acc[n.department]=[]
    }
    acc[n.department].push(n)
    return acc
 },{})
const sortedBySalary=empDep.sort((a,b)=>b.salary-a.salary)

