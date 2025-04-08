function unhideRel(button,BoxName) {
    document.getElementById(BoxName).classList.remove("pop"); 
    button.style.display = "none"; 
  }
function openRel(name){
  document.getElementById(name).classList.toggle("impressactive");
}