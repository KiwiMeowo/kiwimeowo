var spoilers=document.getElementsByClassName("spoiler");
  for (i = 0; i < spoilers.length; i++) {
  spoilers[i].addEventListener("click", function() {
    this.classList.toggle("unspoiler");
  });
}