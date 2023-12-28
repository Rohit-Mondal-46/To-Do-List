let inp = document.getElementById("inp");
let btn = document.getElementById("btn");
let tasks = document.getElementById("tasks");


btn.addEventListener("click",appendTask);
function appendTask(){
    if(inp.value === ""){
        alert("Input Field can not be empty!")
    }
    else{
        var li = document.createElement("LI");
        li.innerHTML = inp.value;
        tasks.appendChild(li);
        var cut = document.createElement("SPAN");
        cut.innerHTML = "\u00d7";
        li.appendChild(cut);
        inp.value = "";
        save();
    }
}
tasks.addEventListener("click",function(e){
    if(e.target.tagName  === "LI"){
        e.target.classList.toggle("completed");
        save();
    }
    else if(e.target.tagName  === "SPAN"){
        e.target.parentElement.remove();
        save();
    }
});


function save(){
    localStorage.setItem("data",tasks.innerHTML)
}
function getData(){
    tasks.innerHTML = localStorage.getItem("data");
}
getData();