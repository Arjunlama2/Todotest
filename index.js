let Tasks=["data1","data2"]

function getDataFromHtml(event) {
    event.preventDefault()
let task=event.target.task.value
Tasks.push(task)
displayTasks()
}


function displayTasks() {
let ul=document.getElementById("task-list")
let string=""
Tasks.forEach((el)=>{
string+=`<li>${el} <button>delete</button></li>`
})
ul.innerHTML=string
}


// displayTasks()


//git init
// git status
// git branch -M main
// git remote add origin <repo-link>
// git add .
// git commit -m "first commit"
// git push 


// now nextime
// git add .
// git commit -m "your message"
// git push