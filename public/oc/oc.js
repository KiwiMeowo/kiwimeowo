function unhideRel(button,BoxName) {
    document.getElementById(BoxName).classList.remove("pop"); 
    button.style.display = "none"; 
  }
function toggleRel(element){
  document.getElementById(element).classList.toggle("flip");
}
var playbuttons = document.getElementById("playbuttons").getElementsByTagName("button");
var music = document.getElementById("playlist").getElementsByTagName("a");
var randomMusic = music[Math.floor(Math.random() * music.length)].href;
for (i = 0; i < playbuttons.length; i++) {
  playbuttons[i].addEventListener("click", function() {
    var link = document.createElement("a");
    link.href = randomMusic;
    link.target = "_blank";
    link.click();
  });
  }
