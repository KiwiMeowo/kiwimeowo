var a= document.getElementsByClassName("pagenum2")[1];
var x = document.getElementsByClassName("row");
for (i = 0; i < x.length; i++){
  a.innerHTML+="<button onclick='openCity(" + (x.length-i) + ")'></button><span class='numdivider'></span>";
  }
  var b= a.getElementsByTagName("button");
  for (i = 0; i < b.length; i++){
    b[i].innerText=i+1;
    }
  b[0].style.color='var(--yellow)';
function openCity(cityName) {
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(cityName.toString()).style.display = "flex";  
}
for (i = 0; i < b.length; i++) {
b[i].addEventListener("click", function() {
  for (e = 0; e < b.length; e++) {
    b[e].style.color="";
  }
this.style.color="var(--yellow)";
})
}