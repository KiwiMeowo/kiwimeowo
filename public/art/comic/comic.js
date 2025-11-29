var pagenum=document.querySelectorAll('.page .date');
var pages=document.getElementsByClassName('page');
for (let x = 0; x < pagenum.length; x++) {
  pagenum[x].innerText=`P. ${x+1}`;
}
function prevpage(){
  if (document.querySelector(".num").innerText!="1"){
    for (let x = 0; x < pages.length; x++){
      pages[x].classList.remove('show');
    }
    document.querySelectorAll(".num")[0].innerText=parseInt(document.querySelector(".num").innerText)-1;
    document.querySelectorAll(".num")[1].innerText=parseInt(document.querySelector(".num").innerText)-1;
    pages[parseInt(document.querySelector(".num").innerText)-1].classList.add('show');
  }
}
function nextpage(){
  if (parseInt(document.querySelector(".num").innerText)!=pages.length){
    for (let x = 0; x < pages.length; x++){
      pages[x].classList.remove('show');
    }
    document.querySelectorAll(".num")[0].innerText=parseInt(document.querySelector(".num").innerText)+1;
    document.querySelectorAll(".num")[1].innerText=parseInt(document.querySelector(".num").innerText)+1;
    pages[parseInt(document.querySelector(".num").innerText)-1].classList.add('show');
  }
}