let list = document.getElementById("list");
let info = document.getElementById("photo");
let title = document.getElementById("title");
function getInfo(e){
    // if(e.target.tagName == "H1"){
    //     let newTitle = e.target;
    // }
    // info.style.display="block";
    // title.textContent = newTitle.textContent
    console.log(e.target.tagName)
}
list.addEventListener("click",getInfo)