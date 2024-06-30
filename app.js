const input = document.getElementById("input-text");
const container = document.getElementById("list-container");


function addlist() {
    
if (input.value == ""){
    input.classList.add("hil");
    setTimeout(()=>{
        input.classList.remove("hil");
    },1000);
}else{
    let li = document.createElement("li");
    li.innerHTML = input.value;
    container.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
}
input.value = ""; 
}

container.addEventListener("click", function(e){

    if(e.target.tagName === "LI"){
e.target.classList.toggle("checked")
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);

document.addEventListener("keydown",function(e){
console.log(e.key);
    if (e.key === "Enter"){
        if (input.value == ""){
            input.classList.add("hil");
            setTimeout(()=>{
                input.classList.remove("hil");
            },1000);
        }else{
            let li = document.createElement("li");
            li.innerHTML = input.value;
            container.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
        }
        input.value = ""; 
        }
    }
);