const input=document.getElementById("inputbox")
const list=document.getElementById("listbox")

function add(){
    if(input.value===" "){
        alert("you should write something");
    }
    else{
        let li=document.createElement("li")
        li.innerHTML=input.value
        list.appendChild(li)
        s=document.createElement("span")
        s.innerHTML="\u00d7";
        li.appendChild(s)
       save()
    }
    input.value="";
    
}
list.addEventListener("click",function(e){
    if(e.target.tagName==='LI'){
          e.target.classList.toggle("checked")
          save()
    }
    if(e.target.tagName==='SPAN'){
            e.target.parentElement.remove();
            swal("Done!", "You are Task deleted Successful!", "success")
            save()
    }
},false)

function save(){
    localStorage.setItem("data",list.innerHTML)
};
function show(){
    list.innerHTML=localStorage.getItem("data")
}
show()