var achievement=document.getElementById("achievement");
var achievements=[
  {"Name":"Classic",
    "Desc":"Kyrea's outfit from a long time ago, still looks good!",
    "Criteria":"Visit Kyrea's bedroom",
    "Preview":"preview/Classic.webp",
    "Clothing":[
      {"Type":"shirt","Style":"top:160px;left:200px;","Image":"OldShirt.png"},
      {"Type":"pants","Style":"top:310px;left:200px;","Image":"OldPants.png"},
      {"Type":"shoes","Style":"top:410px;left:200px;","Image":"OldShoes.png"},
      {"Type":"hat","Style":"top:10px;left:200px;","Image":"OldRibbon.png"}
    ]
  },
  {"Name":"Hampter",
    "Desc":"Cute and comfy hampter hoodie",
    "Criteria":"Click on clickable hampter",
    "Preview":"preview/Hampter.webp",
    "Clothing":[
      {"Type":"shirt","Style":"top: 180px; left: 350px;","Image":"Hampter.png"}
    ]
  }
]
for (i = 0; i < achievements.length; i++){
  achieve=document.createElement('div');
  achieve.classList.add('achievement');
  if (localStorage.getItem(achievements[i].Name)=="true"){
    achieve.innerHTML=`<img src="${achievements[i].Preview}"><div class="desc"><h2>${achievements[i].Name}</h2><p>${achievements[i].Desc}</p><div class="status">Condition to obtain: ${achievements[i].Criteria}</div>`;
    for (j = 0; j < achievements[i].Clothing.length; j++){
    cloth=achievements[i].Clothing[j];
    addcloth=document.createElement('div');
    addcloth.classList.add(cloth.Type);
    addcloth.style=cloth.Style;
    addcloth.innerHTML=`<img src="${cloth.Image}" id="${cloth.Image.replace('.png','')}">`;
    document.body.append(addcloth)
  } 
  } else {
    achieve.innerHTML=`<img src="preview/locked.webp"><div class="desc"><h2>Not found</h2><p>Look around and unlock this outfit!</p><div class="status">Condition to obtain: ${achievements[i].Criteria}</div>`;
  }
  achievement.append(achieve);
  hr=document.createElement('hr');
  achievement.append(hr);
}