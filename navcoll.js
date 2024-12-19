var navcoll = document.getElementsByClassName("navcoll");
var i;

for (i = 0; i < navcoll.length; i++) {
  navcoll[i].addEventListener("click", function() {
    this.classList.toggle("act");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
    content.style.maxHeight = content.scrollHeight + 500 + "px";
    } 
  });
}
