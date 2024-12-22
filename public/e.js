var coll = document.getElementsByClassName("collapsible");
var content = document.getElementsByClassName("content");
var i;
for (i = 0; i < content.length; i++){
var date1 = content[i].getElementsByTagName('hr');
const para = document.createElement("center");
const button = document.createElement("button");
const node = document.createTextNode("[ close ]");
button.appendChild(node);
para.appendChild(button);
date1[date1.length-1].before(para);
button.classList.add("close");
}
var close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
close[i].addEventListener("click", function() {
    var content=this.parentElement.parentElement;
    var untoggle = content.previousElementSibling;
    untoggle.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        });
    content.style.maxHeight = null;
    untoggle.classList.remove("active");
});
}
for (i = 0; i < coll.length; i++) {
  if(coll[i].tagName!="A"){
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
    content.style.maxHeight = content.scrollHeight + 5000 + "px";
    } 
  });
}
}