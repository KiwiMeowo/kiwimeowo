// I edit the position of the thumbnails by adding scale, translate and/or object position. However, when I edit it while live preview is on, there is a chance the images stop showing (Prob because live preview refreshes the page too much, and the browser doesn't like that). I can also open a new browser window and use DevTools... But that's too many steps.
// So I made this code to edit the style through the live preview window without opening DevTools. I can just adjust the style on the page, then copy it directly to my code! 
// Originally wanted the thumbnail thing to activate by using the Konami code, but I realised I could just turn it on when it is local hosted. Well I guess I can leave it in as an Easter Egg.
var cheatcode=[];
document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowLeft'||event.key === 'ArrowRight'||event.key === 'ArrowUp'||event.key === 'ArrowDown'||event.key === 'a'||event.key === 'b') {
    cheatcode.push(event.key)
    if(cheatcode.length==10){
      if (cheatcode.join("")=="ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba"){
        document.getElementById("thumbnail").style.display="block";
        getAchievement('Hacker');
      } else{
        cheatcode=[];
      }
    }
  }
});
if (window.location.host=="127.0.0.1:3000"){
  document.getElementById("thumbnail").style.display="block";
}
var imagenum=document.getElementById("imagenum");
var imageop=document.getElementById("op");
var imagescale=document.getElementById("sc");
var imagex=document.getElementById("translatex");
var imagey=document.getElementById("translatey");
var currentnum=0;
imagenum.innerText=1;

function showImg(value){
  imageop.value=document.querySelectorAll(".artborder img")[value].style.objectPosition;
  if(document.querySelectorAll(".artborder img")[value].style.objectPosition==""){
  imageop.value="center";
}
imagescale.value=document.querySelectorAll(".artborder img")[value].style.scale;
  if(document.querySelectorAll(".artborder img")[value].style.scale==""){
  imagescale.value="1";
}
  if(document.querySelectorAll(".artborder img")[value].style.translate==""){
  imagex.value="0";
  imagey.value="0";
} else{
  imagex.value=document.querySelectorAll(".artborder img")[value].style.translate.split(" ")[0].replace("%","").replace("px","");
  if(document.querySelectorAll(".artborder img")[value].style.translate.split(" ")[1]!=undefined){
    imagey.value=document.querySelectorAll(".artborder img")[value].style.translate.split(" ")[1].replace("%","").replace("px","");
  } else{
    imagey.value="0";
  }
}
document.getElementById("result").value=document.querySelectorAll(".artborder img")[currentnum].getAttribute('style');
}
showImg(0)
function prevNum(){
  if (currentnum!=0){
    currentnum-=1;
    imagenum.innerText=currentnum+1;
    showImg(currentnum);
  }
}
function nextNum(){
  currentnum+=1;
  imagenum.innerText=currentnum+1;
  showImg(currentnum);
}
function adjust(style,value){
  style.value=parseFloat(style.value)+value;
  setStyle();
}
function setStyle(){
  if(imageop.value!="center"){
    document.querySelectorAll(".artborder img")[currentnum].style.objectPosition=imageop.value;
  }else{
    document.querySelectorAll(".artborder img")[currentnum].style.objectPosition="";
  }
  if(imagescale.value!="1"){
    document.querySelectorAll(".artborder img")[currentnum].style.scale=imagescale.value;
  } else{
    document.querySelectorAll(".artborder img")[currentnum].style.scale="";
  }
  if(imagex.value!="0"||imagey.value!="0"){
    document.querySelectorAll(".artborder img")[currentnum].style.translate=`${imagex.value}% ${imagey.value}%`;
  } else{
    document.querySelectorAll(".artborder img")[currentnum].style.translate="";
  }
    document.getElementById("result").value=document.querySelectorAll(".artborder img")[currentnum].getAttribute('style');
}

function copy() {
  // Get the text field
  var copyText = document.getElementById("result");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  document.execCommand('copy');
}
function RSScopy(){
  var copyText = document.getElementById("rss");
  var art=document.querySelectorAll(".artborder img")[currentnum];
  copyText.value=`<item><title>${art.getAttribute('alt')}</title><guid>${art.getAttribute('src').split('/')[6].split("?")[0]}</guid><link href="https://kiwimeowo.neocities.org/art/2025.html">${art.getAttribute('src').replace("&","&amp;")}</link><description><![CDATA[${art.getAttribute('title')}]]></description><pubDate>${(new Date()).toString().replace(" ",", ")}</pubDate><enclosure url="${art.getAttribute('src').replace("&","&amp;")}" type="image/${art.getAttribute('src').split(".")[3].split("?")[0]}" /></item>`;
  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  document.execCommand('copy');
}