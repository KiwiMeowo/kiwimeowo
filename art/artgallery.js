var a= document.getElementsByClassName("pagenum2")[1];
  var b= a.getElementsByTagName("a");
  b[0].style.color='var(--yellow)';
function openCity(cityName) {
  var x = document.getElementsByClassName("row");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(cityName).style.display = "flex";  
}
for (i = 0; i < b.length; i++){
b[i].innerText=i+1;
}
for (i = 0; i < b.length; i++) {
b[i].addEventListener("click", function() {
  for (e = 0; e < b.length; e++) {
    b[e].style.color="";
  }
this.style.color="var(--yellow)";
})
}