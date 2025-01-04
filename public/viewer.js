var art = document.querySelectorAll('.artborder:not(a)');
var createwindow=document.createElement('div');
  createwindow.id="window";
  createwindow.innerHTML='<div id="artview"><img src=""><div class="text"><p></p></div></div><div id="artnav"><button id="prevart">⭠ Prev</button><button id="x">[ x ]</button><button id="nextart">Next ⭢</button></div>';
  document.body.appendChild(createwindow);
	var artwindow=document.getElementById('window');
	var artwork=artwindow.getElementsByTagName("img")[0];
	var artdesc=artwindow.getElementsByTagName("p")[0];
    for (i = 0; i < art.length; i++) {
      art[i].setAttribute("data-openid", i);
    art[i].addEventListener("click", function() {
      artwork.setAttribute("data-openid", this.getAttribute("data-openid"));
      if (this.classList.contains("censor")){
        artwork.classList.add("censor");
        artwork.addEventListener("click", censor);
      } else{
        artwork.classList.remove("censor");
        artwork.removeEventListener("click", censor);
      }
      artwork.src="../loading.gif";
      setTimeout(function(){
        artwork.src=art[artwork.getAttribute("data-openid")].getElementsByTagName("img")[0].src;
    },100);
    artdesc.innerHTML=this.getElementsByTagName("img")[0].title;
      artwindow.style.transform="translateY(0)";
      artwindow.style.opacity="1";
      artwindow.style.zIndex="100";
    })
  }
  window.addEventListener('click', (e) => {
    if (e.target === artwindow || e.target === document.getElementById("x") || e.target === document.getElementById("artview")){
        artwindow.style.transform="translateY(-50%)";
      artwindow.style.opacity="0";
      artwindow.style.zIndex="-1";
    }
});
document.getElementById("prevart").addEventListener("click",function(){
  if (artwork.getAttribute("data-openid")>0){
  artwork.setAttribute("data-openid", artwork.getAttribute("data-openid")-1);
  if (art[artwork.getAttribute("data-openid")].classList.contains("censor")){
    artwork.classList.add("censor");
    artwork.addEventListener("click", censor);
  } else{
    artwork.classList.remove("censor");
    artwork.removeEventListener("click", censor);
  }
  artwork.src="../loading.gif";
      setTimeout(function(){
        artwork.src=art[artwork.getAttribute("data-openid")].getElementsByTagName("img")[0].src;
    },100);
  artdesc.innerHTML=art[artwork.getAttribute("data-openid")].getElementsByTagName("img")[0].title;
  } else{
    this.innerText="Limit!";
    this.classList.add("invalid");
    setTimeout(function(){
      document.getElementById("prevart").innerText="⭠ Prev";
      document.getElementById("prevart").classList.remove("invalid");
  },1000);
  }
});
document.getElementById("nextart").addEventListener("click",function(){
  if (artwork.getAttribute("data-openid")<art.length-1){
  artwork.setAttribute("data-openid", parseInt(artwork.getAttribute("data-openid"))+1);
  if (art[artwork.getAttribute("data-openid")].classList.contains("censor")){
    artwork.classList.add("censor");
    artwork.addEventListener("click", censor);
  } else{
    artwork.classList.remove("censor");
    artwork.removeEventListener("click", censor);
  }
  artwork.src="../loading.gif";
      setTimeout(function(){
        artwork.src=art[artwork.getAttribute("data-openid")].getElementsByTagName("img")[0].src;
    },100);
  artdesc.innerHTML=art[artwork.getAttribute("data-openid")].getElementsByTagName("img")[0].title;
  }else{
    this.innerText="Limit!";
    this.classList.add("invalid");
    setTimeout(function(){
      document.getElementById("nextart").innerText="Next ⭢";
      document.getElementById("nextart").classList.remove("invalid");
  },1000);
  }
});
function censor(){
  artwork.classList.toggle("censor");
}