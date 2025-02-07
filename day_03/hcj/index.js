document.addEventListener("DOMContentLoaded",loadTask);

const TaskInput= document.getElementById("TaskInput");
const button= document.getElementById("btn").addEventListener("click",addTask());
const TaskList= document.getElementById("taskList");
const sortbtn=document.getElementById("sorting").addEventListener("click",sort())

function addTask(){
    const task=TaskInput.trim().value();
    if(task=="") return;
    task=({title:"",priority:({"low"||"medium"||"high"}),completed:false})
    document.createElement("li");
    TaskList.appendChild("li");
    task.append(li)
    localStorage.getItem("task"||[]);
}
function filter(){
    const filterTaskByPriority=TaskList.filter((i)=>i.priority==="high"||i.priority==="medium"||i.priority==="low")
}
function sort(){
    const sortTaskByAlphabet=TaskList.sort((a,b)=>a.title-b.title)
}

