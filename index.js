let Tasks= JSON.parse(localStorage.getItem("tasks")) || []

function getDataFromHtml(event) {
    event.preventDefault()
let task=event.target.task.value
Tasks.push(task)
localStorage.setItem("tasks",JSON.stringify(Tasks))
displayTasks()
}


function displayTasks() {
let ul=document.getElementById("task-list")
let string=""
Tasks.forEach((el,index)=>{
string+=`<li>${el} <button onClick="deteleTask(${index})"><span class="material-symbols-outlined">
delete
</span></button></li>`
})
ul.innerHTML=string
}


displayTasks()


function deteleTask(index) {
Tasks.splice(index,1)
localStorage.setItem("tasks",JSON.stringify(Tasks))
displayTasks()
}

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