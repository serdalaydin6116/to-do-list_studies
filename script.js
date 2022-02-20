let task = document.getElementById("task");
let plus = document.getElementById("plus");
let list = document.getElementById("list");




// const completedTaskCount = () =>{
  

  
//     let checkedCount = list.getElementsByClassName("control").length
//     console.log(checkedCount);
//     let taskCount = document.getElementsByClassName("myInput").length
//     console.log(taskCount);
  
//     console.log(checkedCount, taskCount);
//     const checkedTasks =document.getElementById("checkedTasks"); 
//     const allTasks =document.getElementById("allTasks");
//     checkedTasks.innerText = checkedCount;
//     allTasks.innerText = taskCount;

// }



plus.addEventListener("click", () => {
    
    if (task.value=="") {
    alert("Hey, Come On! You don't even read the page. You must enter a task to be accomplished today!! ");
    
  } else {


    
    let new_list = document.createElement("div")
    new_list.setAttribute("class", "myInput")
    

    let check = document.createElement("input")
    check.setAttribute("type", "checkbox");
    check.setAttribute("id", "myCheckbox");
    new_list.appendChild(check);


    let edited = document.createElement("i");
    edited.setAttribute("class", "fas fa-pen");
    edited.setAttribute("id", "edit");
    new_list.appendChild(edited)
    

    let deleted = document.createElement("i");
    deleted.setAttribute("class", "fas fa-trash");
    deleted.setAttribute("id", "trash");
    new_list.appendChild(deleted);    

    

    new_list.innerHTML += task.value
    list.prepend(new_list)
    task.value = ""
 

    let btndelete = document.getElementById("trash")
    btndelete.addEventListener("click",()=>{
        new_list.remove()    
    })

    let btnedit = document.getElementById("edit")
    btnedit.addEventListener("click", ()=>{
        let content = btnedit.parentElement
        
        if (content.getAttribute("contenteditable") == "true"){
            content.setAttribute("contenteditable", false)
        } else {
            content.setAttribute("contenteditable", true)
        }
    })


    let btncheck = document.getElementById("myCheckbox")
    btncheck.addEventListener("change", (e) => {

        if (e.target.checked == true) {
            new_list.style.backgroundColor = "#0000ff";
            new_list.style.color = "white";
            new_list.style.textDecoration = "line-through";
            new_list.style.textDecorationColor = "white";
            
        }
        else if (e.target.checked == false) {
            new_list.style.backgroundColor = "";
            new_list.style.color = "black";
            new_list.style.textDecoration = "";
        }

    })
  }
    
})