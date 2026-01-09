//Define the elements that will trigger the window when clicked
var art = document.querySelectorAll('.artborder:not(:has(img[src=""]))');
//Create window HTML at the bottom
var createwindow=document.createElement('div');
  createwindow.id="window";
  createwindow.innerHTML='<div id="artview"><img src=""><div class="text"><p></p><a id="link">Open Album</a></div></div><div id="artnav"><button id="prevart">⭠ Prev</button><button id="x">[ x ]</button><button id="nextart">Next ⭢</button></div>';
  document.body.appendChild(createwindow);
	var artwindow=document.getElementById('window');
	var artwork=artwindow.getElementsByTagName("img")[0];
	var artdesc=artwindow.getElementsByTagName("p")[0];
  var artlink=document.getElementById("link");

//For every element with artborder class
    for (i = 0; i < art.length; i++) {
      // The elements are given an open id for the window code
      art[i].setAttribute("data-openid", i);
    art[i].addEventListener("click", function() {
      //If you click the element, "a" tags will not open the window
      if (this.tagName!="A"){
        // Hide the Open Album element
        artlink.style.display="none";
        artlink.href=="";
        // Save open id in the window image element
        artwork.setAttribute("data-openid", this.getAttribute("data-openid"));
      checkCensor(art[artwork.getAttribute("data-openid")]);
      loadIMG(art[artwork.getAttribute("data-openid")]);
      //Open window
      artwindow.style.transform="translateY(0)";
      artwindow.style.opacity="1";
      artwindow.style.zIndex="100";
      }
    })
  }

  //Close window
  window.addEventListener('click', (e) => {
    if (e.target === artwindow || e.target === document.getElementById("x") || e.target === document.getElementById("artview")){
        artwindow.style.transform="translateY(-50%)";
      artwindow.style.opacity="0";
      artwindow.style.zIndex="-1";
    }
});

// Function for previous button
document.getElementById("prevart").addEventListener("click",function(){
  if (artwork.getAttribute("data-openid")>0){
  artwork.setAttribute("data-openid", artwork.getAttribute("data-openid")-1);
  checkAnchor(art[artwork.getAttribute("data-openid")]);
  checkCensor(art[artwork.getAttribute("data-openid")]);
  loadIMG(art[artwork.getAttribute("data-openid")]);
  } else{
    this.innerText="Limit!";
    this.classList.add("invalid");
    setTimeout(function(){
      document.getElementById("prevart").innerText="⭠ Prev";
      document.getElementById("prevart").classList.remove("invalid");
  },1000);
  }
});

// Function for next button
document.getElementById("nextart").addEventListener("click",function(){
  if (artwork.getAttribute("data-openid")<art.length-1){
  artwork.setAttribute("data-openid", parseInt(artwork.getAttribute("data-openid"))+1);
  checkAnchor(art[artwork.getAttribute("data-openid")]);
  checkCensor(art[artwork.getAttribute("data-openid")]);
  loadIMG(art[artwork.getAttribute("data-openid")]);
  }else{
    this.innerText="Limit!";
    this.classList.add("invalid");
    setTimeout(function(){
      document.getElementById("nextart").innerText="Next ⭢";
      document.getElementById("nextart").classList.remove("invalid");
  },1000);
  }
});

// If the opened image is anchor tag, then the window will show an Open Album button
function checkAnchor(openid){
  if((openid.tagName)=="A"){
    artlink.style.display="block";
    artlink.setAttribute("href",openid.href);
   } else{
    artlink.style.display="none";
    artlink.href=="";
   }
}

//If the open image is censored, the window image will be censored, can be toggled by clicking the image
function checkCensor(openid){
  if (openid.classList.contains("censor")){
    artwork.classList.add("censor");
    artwork.addEventListener("click", censor);
  } else{
    artwork.classList.remove("censor");
    artwork.removeEventListener("click", censor);
  }
}

//Load image to prevent delay everytime you click a new image
function loadIMG(openid){
  console.log(openid)
  artwork.src="/assets/loading.gif";
      setTimeout(function(){
        artwork.src=openid.getElementsByTagName("img")[0].src;
    },100);
    artwork.setAttribute("alt", openid.getElementsByTagName("img")[0].getAttribute("alt"));
  artdesc.innerHTML=openid.getElementsByTagName("img")[0].title;
}

// Toggle censor
function censor(){
  artwork.classList.toggle("censor");
}