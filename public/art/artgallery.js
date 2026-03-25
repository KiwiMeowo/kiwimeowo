var pagenum=document.querySelector('#page input');
var movepage=document.getElementsByClassName('movepage');
var artcol = document.querySelectorAll('.col');
var tagon=[];

var taglist={
  Character:["Lavender","Cosmos","Grey","Ruth","Wolf","Solar","Claire","Jaspers","Kyrea","Other OCs", "Cookie Run"],
  Media:['Color Pencil','Alcohol Marker'],
  Finish:["Doodle","Middle","Polished"],
  Special:['Birthday']
}
if (document.getElementById('tags')){
  Object.keys(taglist).forEach(cate=>{
  taglist[cate].forEach(item=>{
    var tagg=document.createElement('span');
    tagg.classList.add('option');
    tagg.innerHTML=`<input type="checkbox" id="${item}"><label for="${item}"><span class="checkmark"></span>${item}</label>`
    document.getElementById(cate).append(tagg);
  })
})
document.getElementById('reset').addEventListener("click",function(){
  for (x = 0; x < checks.length; x++) {
    checks[x].checked = false;
}
tagon=[];
    InitializePage();
})
}
var checks=document.querySelectorAll('#tags input');

function InitializePage(){
  document.querySelectorAll(`.col`).forEach((item)=>{
    item.removeAttribute('data-group');
    item.style.display = "none";
  })
  if(tagon!=[]){
    var str=''
    tagon.forEach((item)=>{
      str=str+`[data-tags*="${item}"]`
    }) 
    artcol = document.querySelectorAll(`.col:has(img${str})`);
  } else{
    artcol = document.querySelectorAll(`.col`);
  }
  for (x=Math.ceil(artcol.length/18)-1;x>=0;x--){
    for(y=18;y>0;y--){
      if (artcol[artcol.length-(y+18*x)]==undefined){
        continue;
      }
else{
  artcol[artcol.length-(y+18*x)].setAttribute('data-group',Math.ceil(artcol.length/18)-x)
}
    }
} 
openPage(1);
pagenum.value=1;
pagenum.setAttribute('max',Math.ceil(artcol.length/18))
}
function openPage(name) {
  for (i = 0; i < artcol.length; i++) {
    artcol[i].style.display = "none";  
  }
  document.querySelectorAll(`.col[data-group="${name}"]`).forEach((item)=>{
    item.style.display = "block"
  })
}
document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    openPage(pagenum.value);
  }
});
function GoPage(num){
  if(document.querySelectorAll(`.col[data-group="${parseInt(pagenum.value)+num}"]`).length!=0){
    openPage(parseInt(pagenum.value)+num)
    pagenum.value=parseInt(pagenum.value)+num;
  }
}

for (x = 0; x < checks.length; x++) {
    checks[x].checked = false;
    checks[x].addEventListener("click", function () {
    const index = tagon.indexOf(this.id);
    if (index > -1) { // only splice array when item is found
      tagon.splice(index, 1); // 2nd parameter means remove one item only
      InitializePage()
    } else{
      tagon.push(this.id)
      InitializePage()
    }
  });
}
InitializePage()

document.querySelector('#page button').setAttribute('onclick','openPage(parseInt(pagenum.value)-1)');
movepage[0].setAttribute('onclick','openPage(1),pagenum.value=1');
movepage[1].setAttribute('onclick','GoPage(-1)');
movepage[2].setAttribute('onclick','GoPage(1)');
movepage[3].setAttribute('onclick','openPage(Math.ceil(artcol.length/18)-1), pagenum.value=Math.ceil(artcol.length/18)');
