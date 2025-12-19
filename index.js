

let Tasks =  JSON.parse(localStorage.getItem("tasks")) || []
function getdataFromHtml(event) {

    event.preventDefault()

    let task = event.target.task.value
    console.log(task)
    Tasks.push(task)
    localStorage.setItem("tasks",JSON.stringify(Tasks))
    displayTask()
}


function displayTask() {
    let ul = document.getElementById("list")
    let liststring = ""
    Tasks.forEach((el,index) => {
        liststring += `<li>${el} <button onclick="delteTask(${index})">delete</button></li>`
    })


    ul.innerHTML = liststring
}

displayTask()


function delteTask(index){
    Tasks.splice(index,1)
    localStorage.setItem("tasks",JSON.stringify(Tasks))
    displayTask()
}