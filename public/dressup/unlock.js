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
  {"Name":"Hacker",
    "Desc":"How did you find it? Where did you find it? Why did you find it? You must be one Easter Egg finding master if you found it randomly.",
    "Criteria":"Enter a special code in an art page... Ok it might be easier if you just open DevTools (Clothing not released yet)",
    "Preview":"preview/locked.webp",
    "Clothing":[
      /*{"Type":"shirt","Image":"OldShirt.png"},
      {"Type":"shoes","Image":"OldShoes.png"},
      {"Type":"hat","Image":"OldRibbon.png"}*/
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
    addcloth.classList.add(achievements[i].Preview.replace(/preview\/|.webp/g,''));
    addcloth.innerHTML=`<img src="${cloth.Image}">`;
    document.body.append(addcloth)
  } 
  } else {
    achieve.innerHTML=`<img src="preview/locked.webp"><div class="desc"><h2>Not found</h2><p>Look around and unlock this outfit!</p><div class="status">Condition to obtain: ${achievements[i].Criteria}</div>`;
  }
  achievement.append(achieve);
  hr=document.createElement('hr');
  achievement.append(hr);
}