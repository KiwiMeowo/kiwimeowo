var nameSelfWebring = "KiwiMeowo";
var relationshipSelfWebring = "is playing UNO with";
var charnameSelfWebring = "Barou Shouei";
var seriesSelfWebring = "Blue Lock";
var imgurlSelfWebring = "webring/baroubaroukyun.jpg";

var templateWebring = document.createElement("selfinsertwebring");
 templateWebring.innerHTML = "<style> #templateWebring a {color: #513aa0; font-weight:bold; text-decoration:underline; text-decoration-style: dashed; text-decoration-color: #513aa0; text-underline-offset: 2px;} #templateWebring a:hover{font-weight:bold; color:#A43379; text-decoration-color:#A43379;}  #templateWebring {border-radius: 5px;min-width:180px !important; text-align:center !important; border:2px solid #513aa0 !important; margin: 15px auto !important; background-image:url('webring/cat_bg.png'); background-size:cover; background-position:center;display:grid;grid-template:'a b''c c';grid-gap: 7.5px;padding: 7.5px;grid-template-columns: 104px auto;} #webringiconbox {grid-area:a;border-radius: 7.5px; border:2px solid #513aa0 !important; overflow:hidden !important; height:100px !important; width:100px !important; padding:0px !important; margin: auto !important; box-sizing:content-box !important; max-width:100% !important; display:block !important; clear:none !important} #iconWebring {width:100px !important; overflow:hidden !important; height:100px !important; margin:0px !important; padding:0px !important; box-sizing:content-box !important} #webringdescbox {width: -webkit-fill-available; border:1px dashed #513aa0 !important;grid-area:b;position:relative;} #webringdesc{width: -webkit-fill-available;line-height: normal !important; font-weight:normal !important;color:#4042a3 !important; font-size:small !important; text-align:center !important;position:absolute;top:50%;transform:translatey(-50%);margin:0;} #webringlinks {line-height:normal !important; font-weight:normal !important; border:1px dashed #513aa0 !important;grid-area:c;} #linkparaWebring { color:#4042a3 !important; font-size:small !important; margin:10px auto !important; line-height: normal !important; text-align:center !important; padding:0px !important;} #webringdesc strong{color: #513aa0;}</style> <div id='templateWebring'> <div id='webringiconbox'> <img id='iconWebring' src='" + imgurlSelfWebring + "'/> </div> <div id='webringdescbox'> <p id='webringdesc'> <strong>" + nameSelfWebring + "</strong><br />" + relationshipSelfWebring + "<br /> <strong>" + charnameSelfWebring + "</strong><br />from <strong>" + seriesSelfWebring + "</strong>! </p> </div> <div id='webringlinks'><p id='linkparaWebring'> | <a href='https://webring.koinuko.pink/members.php' target='_blank'>Members List</a> | <br/>Part of the <a href='https://webring.koinuko.pink' target='_blank'>Self-Insert Webring</a></p> </div> </div>"; 
  document.getElementById("selfinsertwebring").appendChild(templateWebring);    
         
       