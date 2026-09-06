var achievement=document.getElementById("achievement");
var achievements=[
  {"Name":"Classic",
    "Desc":"Kyrea's outfit from a long time ago, still looks good!",
    "Criteria":"Visit Kyrea's bedroom",
    "Preview":"preview/Classic.webp",
    "Clothing":[
      {"Type":"shirt","Image":"OldShirt.png"},
      {"Type":"pants","Image":"OldPants.png"},
      {"Type":"shoes","Image":"OldShoes.png"},
      {"Type":"hat","Image":"OldRibbon.png"}
    ]
  },
  {"Name":"Hampter",
    "Desc":"Cute and comfy hampter hoodie",
    "Criteria":"Click on clickable hampter",
    "Preview":"preview/Hampter.webp",
    "Clothing":[
      {"Type":"shirt","Image":"Hampter.png"}
    ]
  },
  {"Name":"AugustGalaxy",
    "Desc":"Every little step leads to a bigger reward, even the tiny efforts you put into your work might contribute to something you are proud of. Perhaps you should look back sometimes and see how far you've come.",
    "Criteria":"Read something lengthy and kinda boring",
    "Preview":"preview/AugustGalaxy.webp",
    "Clothing":[
      {"Type":"shirt","Image":"AugustGalaxy.png"},
    ]
  },
  {"Name":"IceCream",
    "Desc":"The cats are delighted to see you, and they gave you this outfit as a gratitude. The pastel tricolors makes you feel joyful like scoops of ice cream!",
    "Criteria":"Visit KiwiMeowo's everyone site<br>(Hint: It is from Melonland!) (Clothing not released yet)",
    "Preview":"preview/locked.webp",
    "Clothing":[
      /*{"Type":"shirt","Image":"OldShirt.png"},
      {"Type":"shoes","Image":"OldShoes.png"},
      {"Type":"hat","Image":"OldRibbon.png"}*/
    ]
  },
  {"Name":"Christmas",
    "Desc":"Merry Christmas!",
    "Criteria":"Click something with lot's of Christmas joy",
    "Preview":"preview/Christmas.webp",
    "Clothing":[
    {"Type":"shirt","Image":"ChristmasSuit.png"},
      {"Type":"shoes","Image":"ChristmasBoots.png"},
      {"Type":"hat","Image":"ChristmasHat.png"}
    ]
  },
  {"Name":"ArtExplorer",
    "Desc":"How did you find it? Where did you find it? Why did you find it? You must be one Easter Egg finding master if you found it randomly.",
    "Criteria":"Enter a special code in an art page... Ok it might be easier if you just open DevTools (Clothing not released yet)",
    "Preview":"preview/ArtExplorer.webp",
    "Clothing":[
      {"Type":"shirt","Image":"NeoShirt.png"},
      {"Type":"pants","Image":"NeoSkirt.png"},
      {"Type":"hat","Image":"NeoFlower.png"}
    ]
  }
]
var SelectClothes=document.querySelector("#SelectClothes");
for (i = 0; i < achievements.length; i++){
  achieve=document.createElement('div');
  achieve.classList.add('achievement');
  if (localStorage.getItem(achievements[i].Name)=="true"){
    achieve.innerHTML=`<img src="${achievements[i].Preview}"><div class="desc"><h2>${achievements[i].Name}</h2><p>${achievements[i].Desc}</p><div class="status">Condition to obtain: ${achievements[i].Criteria}</div>`;
    for (j = 0; j < achievements[i].Clothing.length; j++){
    cloth=achievements[i].Clothing[j];
    addcloth=document.createElement('div');
    addcloth.classList.add(cloth.Type);
    addcloth.classList.add(achievements[i].Name);
    addcloth.innerHTML=`<img src="clothings/${cloth.Image}">`;
    document.body.append(addcloth);
  } 
  var ClothesSpan=document.createElement("span");
  var ClothesSelectBox=document.createElement("input");
    ClothesSelectBox.setAttribute("id",achievements[i].Name);
    ClothesSelectBox.setAttribute("type","checkbox");
    var ClothesLabel=document.createElement("label");
    ClothesLabel.setAttribute("for",achievements[i].Name);
    ClothesLabel.innerText=achievements[i].Name;
    ClothesSpan.append(ClothesSelectBox);
    ClothesSpan.append(ClothesLabel);
    SelectClothes.append(ClothesSpan);
  } else {
    achieve.innerHTML=`<img src="preview/locked.webp"><div class="desc"><h2>Not found</h2><p>Look around and unlock this outfit!</p><div class="status">Condition to obtain: ${achievements[i].Criteria}</div>`;
  }
  achievement.append(achieve);
  hr=document.createElement('hr');
  achievement.append(hr);
}
var checks=document.querySelectorAll('input');
for (x = 0; x < checks.length; x++) {
    checks[x].checked = true;
    checks[x].addEventListener("change", function () {
      console.log(this.getAttribute("id"));
    if(this.checked==false){
      document.querySelectorAll('.'+this.getAttribute("id")).forEach(item=>{
      item.style.display="none";
    })
    }else{
      document.querySelectorAll('.'+this.getAttribute("id")).forEach(item=>{
      item.style.display="block";
    })
    }
  });
}