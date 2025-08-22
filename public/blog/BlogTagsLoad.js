/*Codes that have to be run everytime old blogs are fetched or the current blogs becomes visible again*/
/*Tooltips for fetched old blogs*/
function Tooltips(){
    $('#load [title]').style_my_tooltips();
}
/*Add blog dates to the bottom of the blogs, also includes the code for setting the include and exclude values*/
var load=document.getElementById("load");
var loadblogs = load.getElementsByClassName("collapsible");
var loaddate1 = load.getElementsByClassName('date');

var selectid=document.getElementById("select");
var select=selectid.getElementsByTagName("input");
var number=selectid.getElementsByClassName("number");

var excludeid=document.getElementById("exclude");
var exclude=excludeid.getElementsByTagName("input");

var blogs= document.getElementsByClassName("collapsible");

function BlogDate(){
for (i = 0; i < loadblogs.length; i++){
loaddate1[i].innerText = loadblogs[i].getElementsByClassName("blogdate")[0].innerText;
};
}
function BlogTag(){
for ( x=0;x<loadblogs.length;x++ ){
var classtags=loadblogs[x].title.split(", ");
loadblogs[x].setAttribute("data-include",classtags.length);
loadblogs[x].setAttribute("data-exclude",0);
}
}
/*Collapsible and close button code*/
  function collapse(){
var content = load.getElementsByClassName("content");
for (i = 0; i < content.length; i++){
const para = document.createElement("center");
const button = document.createElement("button");
const node = document.createTextNode("[ close ]");
button.appendChild(node);
para.appendChild(button);
var bhr = content[i].getElementsByTagName('hr');
bhr[bhr.length-1].before(para);
button.classList.add("close");
}
var close = load.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
close[i].addEventListener("click", function() {
    var content=this.parentElement.parentElement;
    var untoggle = content.previousElementSibling;
    untoggle.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        });
    content.style.maxHeight = null;
    untoggle.classList.toggle("active");
});
}
for (i = 0; i < loadblogs.length; i++) {
  if(loadblogs[i].tagName!="A"){
  loadblogs[i].addEventListener("click", function() {
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
}
/*Calculates the number of blogs containing each tag (for old blogs)*/
 function TagNumbersLoad(){
for ( x=0;x<number.length;x++ ){
number[x].innerHTML=0;
var find=select[x].id;
for ( y=0;y<loadblogs.length;y++ ){
  var tag=loadblogs[y].title.split(", ");
  if (tag.includes(find)){
  number[x].innerHTML=parseInt(number[x].innerHTML)+1;
  }
  }
}
 }

/*Checks all include tag options and shows all blogs*/
 function showAll(){
        for (i = 0; i < blogs.length; i++) {
          if(blogs[i].tagName!="A"){
          blogs[i].classList.remove("active");
          var content = blogs[i].nextElementSibling;
          content.style.maxHeight = null;
          }
        }
        for ( y=0;y<select.length;y++ ){
        select[y].checked=true;
        }
        for ( x=0;x<blogs.length;x++ ){
        var classtags=blogs[x].title.split(", ");
        blogs[x].setAttribute("data-include",classtags.length);
        }
      }
/*Unchecks all include tag options and hides all blogs*/
function hideAll(){
        for (i = 0; i < blogs.length; i++) {
          if(blogs[i].tagName!="A"){
          blogs[i].classList.remove("active");
          var content = blogs[i].nextElementSibling;
          content.style.maxHeight = null;
          }
        }
        for ( y=0;y<select.length;y++ ){
        select[y].checked=false;
        }
        for ( x=0;x<blogs.length;x++ ){
        var classtags=blogs[x].title.split(", ");
        incl=blogs[x].getAttribute("data-include");
        blogs[x].setAttribute("data-include",0);
        }
      }
/*Unhecks all exclude tag options and shows all blogs*/
function unexcludeAll(){
  for ( y=0;y<select.length;y++ ){
        exclude[y].checked=false;
        }
        for ( x=0;x<blogs.length;x++ ){
        blogs[x].setAttribute("data-exclude",0);
        }
      }
/*Checks all include tag options and show all blogs*/
function Current(){
        document.getElementById("current").style.display = "block";
        load.innerHTML = "";
        showAll();
        unexcludeAll();
        ShesGone();
        TagNumbers();
      }
/*Fetch old blogs*/
function fetchHtml(link) {
  document.getElementById("current").style.display = "none";
  load.innerHTML = "";
  document.getElementsByClassName("circle-out")[0].style.display="block";
  fetch(link)
  .then((response) => {
    return response.text();
  })
  .then((html) => {
    var parser = new DOMParser();
    var doc = parser.parseFromString(html, "text/html");
    var newdrawing = doc.querySelector('.blog').outerHTML;
    load.innerHTML = newdrawing;
    if (link.includes("2023")||link.includes("2024")){
      collapse();
      BlogDate();
      spoiler();
    }
    BlogTag();
  TagNumbersLoad();
  ShesGone();
  setTimeout(Tooltips,100);
  document.getElementsByClassName("circle-out")[0].style.display="none";
  })
  .catch(error => {
     load.innerHTML = "Whoops my code broke";
  });
}
/*Reset tags back to default (Check all include tags, uncheck all exclude tags)*/
function ShesGone(){
for ( i=0;i<select.length;i++ ){
select[i].checked=true;
exclude[i].checked=false;
  }
}
function spoiler(){
  var spoiler=load.getElementsByClassName("spoiler");
  for (i = 0; i < spoiler.length; i++) {
  spoiler[i].addEventListener("click", function() {
    this.classList.toggle("unspoiler");
  });
}
}
// function wait(){
// if (load.innerHTML!=""){
// BlogTag();
// TagNumbersLoad();
// ShesGone();
// setTimeout(Tooltips,100);
// document.getElementsByClassName("circle-out")[0].style.display="none";
// return
// } else{
// setTimeout(wait,250);
// document.getElementsByClassName("circle-out")[0].style.display="block";
// }
// }

// function waitold(){
// if (load.innerHTML!=""){
// collapse();
// BlogDate();
// BlogTag();
// TagNumbersLoad();
// ShesGone();
// spoiler();
// setTimeout(Tooltips,100);
// document.getElementsByClassName("circle-out")[0].style.display="none";
// return
// } else{
// setTimeout(waitold,250);
// document.getElementsByClassName("circle-out")[0].style.display="block";
// }
// }

/*Codes that run on load*/
 /*Calculates the number of blogs containing each tag (for current blogs)*/
  function TagNumbers(){
for ( x=0;x<number.length;x++ ){
number[x].innerHTML=0;
var find=select[x].id;
for ( y=0;y<blogs.length;y++ ){
  var tag=blogs[y].title.split(", ");
  if (tag.includes(find)){
  number[x].innerHTML=parseInt(number[x].innerHTML)+1;
  }
  }
}
 }
TagNumbers();

/*Add include filter values, the number given to each blog is their total tag numbers, unchecking a corresponding tag will deduct by one for the blogs that include said tag, when it reaches 0, the blog is hidden*/
for ( x=0;x<blogs.length;x++ ){
var classtags=blogs[x].title.split(", ");
blogs[x].setAttribute("data-include",classtags.length);
blogs[x].setAttribute("data-exclude",0);
}

for ( i=0;i<select.length;i++ ){
select[i].checked=true;
  select[i].addEventListener("click", function() {
  hp=this.id;
  for ( y=0;y<blogs.length;y++ ){
  var hide=false;
  var tag=blogs[y].title.split(", ");
  if (tag.includes(hp)){
  hide=true;
  }
  incl=blogs[y].getAttribute("data-include");
   if (this.checked == false && hide==true){
    blogs[y].setAttribute("data-include",parseInt(incl)-1);
  } else if (this.checked == true && hide==true){
    blogs[y].setAttribute("data-include",parseInt(incl)+1);
     
  }
  incl=blogs[y].getAttribute("data-include");
  if (parseInt(incl)==0){
    if(blogs[y].tagName!="A"){
  blogs[y].classList.remove("active");
  var content = blogs[y].nextElementSibling;
  content.style.maxHeight = null;
    }
  } 
  }
  });
  }

/*Add exclude filter values, the number given to each blog is 0, checking a corresponding tag will increase by one for the blogs that include said tag, when it is larger than 0, the blog is hidden*/
for ( i=0;i<exclude.length;i++ ){
	exclude[i].checked=false;
  exclude[i].addEventListener("click", function() {
  hp=this.id.split("2")[0];
  for ( y=0;y<blogs.length;y++ ){
  var hide=false;
  var tag=blogs[y].title.split(", ");
  if (tag.includes(hp)){
  hide=true;
  }
  excl=blogs[y].getAttribute("data-exclude");
   if (this.checked == false && hide==true){
    blogs[y].setAttribute("data-exclude",parseInt(excl)-1);
  } else if (this.checked == true && hide==true){
     blogs[y].setAttribute("data-exclude",parseInt(excl)+1);
  }
    excl=blogs[y].getAttribute("data-exclude");
  if (parseInt(excl)>0){
    if(blogs[y].tagName!="A"){
  blogs[y].classList.remove("active");
  var content = blogs[y].nextElementSibling;
  content.style.maxHeight = null;
  }
}
  }
  });
  }