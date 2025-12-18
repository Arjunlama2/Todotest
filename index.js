let Tasks = JSON.parse(localStorage.getItem("tasks")) || []

function getDataFromHtml(event) {
    event.preventDefault()
    let task = event.target.task.value
    Tasks.push(task)
    localStorage.setItem("tasks", JSON.stringify(Tasks))
    displayTasks()
}

function displayTasks() {
    
    const ul = document.getElementById("list")
    ul.innerHTML = "";
    let string = "";

    Tasks.forEach((el, index) => {
        string += `
        <li>
            ${el}
            <button onClick="deleteTask(${index})">
            <span class="material-symbols-outlined">delete</span>
            </button>
        </li>`;
    });

    ul.innerHTML = string;

}



displayTasks()


function deleteTask(index) {
    Tasks.splice(index, 1)
    localStorage.setItem("tasks", JSON.stringify(Tasks))
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



// let random=Math.random()*100
// console.log(random)
// console.log(Math.floor(random))
// console.log(Math.ceil(random))
// console.log(Math.round(random))



