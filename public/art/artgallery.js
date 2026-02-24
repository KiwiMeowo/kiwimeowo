var row = document.getElementsByClassName("row");
var pagenum=document.querySelector('#page input');
var movepage=document.getElementsByClassName('movepage');
function openPage(name) {
  for (i = 0; i < row.length; i++) {
    row[i].style.display = "none";  
  }
  document.getElementsByClassName('row')[name].style.display = "flex";  
}
document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    openPage(pagenum.value-1);
  }
});
function GoPage(num){
  if(document.getElementsByClassName('row')[parseInt(pagenum.value)-1+num]!=undefined){
    openPage(pagenum.value-1+num)
    pagenum.value=parseInt(pagenum.value)+num;
  }
}
openPage(0);
pagenum.value=1;
pagenum.setAttribute('max',row.length)
document.querySelector('#page button').setAttribute('onclick','openPage(parseInt(pagenum.value)-1)');
movepage[0].setAttribute('onclick','openPage(0),pagenum.value=1');
movepage[1].setAttribute('onclick','GoPage(-1)');
movepage[2].setAttribute('onclick','GoPage(1)');
movepage[3].setAttribute('onclick','openPage(row.length-1), pagenum.value=row.length');
