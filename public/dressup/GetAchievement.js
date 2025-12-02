function getAchievement(name){
  if (localStorage.getItem(name)!="true"){
    localStorage.setItem(name,"true");
    pop=document.createElement('div');
    pop.setAttribute("id","achievement");
    pop.innerHTML=`<div id="star"></div><div id="desc"><h1>Congrats! You found ${name}!</h1><p>Check the dress up room for details</p></div>`;
    document.body.prepend(pop);
    setTimeout(function(){pop.style="left:-550px"},5000);
  }
}