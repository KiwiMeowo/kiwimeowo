function BlogFuckDate(){
var btn = document.getElementsByClassName('collapsible');
var date1 = document.getElementsByClassName('date');
for (i = 0; i < btn.length; i++){
date1[i].innerText= btn[i].getElementsByClassName("blogdate")[0].innerText;
}
}
BlogFuckDate();