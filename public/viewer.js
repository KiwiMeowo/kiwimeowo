var art = document.getElementsByClassName('artborder');
	var artwindow=document.getElementsByClassName('window')[0];
	var artwork=artwindow.getElementsByTagName("img")[0];
	var artdesc=artwindow.getElementsByTagName("p")[0];
    for (i = 0; i < art.length; i++) {
      if(art[i].tagName!="A"){
    art[i].addEventListener("click", function() {
      artwork.src=this.getElementsByTagName("img")[0].src;
      artdesc.innerHTML=this.getElementsByTagName("img")[0].title;
      artwindow.style.transform="translateY(0)";
      artwindow.style.opacity="1";
      artwindow.style.zIndex="100";
    })
    }
  }
  window.addEventListener('click', (e) => {
    if (e.target === artwindow || e.target === document.getElementById("x")){
        artwindow.style.transform="translateY(-50%)";
      artwindow.style.opacity="0";
      artwindow.style.zIndex="-1";
    }
});