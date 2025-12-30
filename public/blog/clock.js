        //The clock and birthday timer
var birthdate=document.getElementById("birthdate");
var birthguy=document.getElementById("birthguy");
var dot=document.getElementById("dot");
var hkdate = document.getElementById('hkdate');
var hktime = document.getElementById('hktime');
function timeToText(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
     var seconds = date.getSeconds();
    if (minutes < 10) minutes = '0'+minutes;
    if  (seconds < 10) seconds = '0'+seconds;
    if (hours < 10) hours = '0'+hours;
    return hours + ":" + minutes + ":" + seconds;
}
function dateToText(date) {
    var day = date.getDate();
    var monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                       "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
     var month = monthNames[date.getMonth()];
     var year = date.getFullYear();
    if (day < 10) day = '0'+day;
    return day + " " + month + " " + year;
}
function updateClocks() {
	var offset = window.arrOffsets;
  var birthlist=[
    {'Name':"Claire and Grey",
      "Date":"01-12"
    },
    {'Name':"Solar",
      "Date":"02-26"
    },
    {'Name':"Ruth",
      "Date":"06-13"
    },
    {'Name':"Lavender",
      "Date":"07-25"
    },
    {'Name':"Mira",
      "Date":"07-26"
    },
    {'Name':"Kyrea",
      "Date":"09-19"
    },
    {'Name':"Jaspers, Bun and Penelope",
      "Date":"09-29"
    },
    {'Name':"Cosmos",
      "Date":"11-15"
    },
    {'Name':"Wolf",
      "Date":"11-22"
    }
  ]
  if (dot.innerHTML=="..."){
  dot.innerHTML=".";
  } else {
    dot.innerHTML+=".";
  }
    hkdate.innerHTML = dateToText(new Date(new Date().getTime()+offset));
		hktime.innerHTML = timeToText(new Date(new Date().getTime()+offset));
    var thismonth=((new Date(new Date().getTime()+offset)).getMonth()+1);
    if (thismonth<10){
    thismonth='0'+thismonth;
    }
    var thisday=(new Date(new Date().getTime()+offset)).getDate();
    if (thisday<10){
    thisday='0'+thisday;
    }
    var today= thismonth+ "-" + thisday;
    currentyr=parseInt(hkdate.innerHTML.split(' ')[2]);
    for (x=0;x<birthlist.length;x++){
      if (today<birthlist[x].Date){
        birthdate.innerHTML=(new Date(currentyr+"-"+birthlist[x].Date)-new Date(currentyr+"-"+today))/(24*3600*1000);
        birthguy.innerHTML=birthlist[x].Name;
        break
      } 
      else if (today==birthlist[x].Date){
        document.getElementById("birthannounce").innerHTML="Happy birthday " + birthlist[x].Name + "!";
        if (x+1!=birthlist.length){
          birthdate.innerHTML=(new Date(currentyr+"-"+birthlist[x+1].Date)-new Date(currentyr+"-"+today))/(24*3600*1000);
          birthguy.innerHTML=birthlist[x+1].Name;
        } 
        else{
          birthdate.innerHTML=(new Date((currentyr+1)+"-"+birthlist[0].Date)-new Date(currentyr+"-"+today))/(24*3600*1000);
          birthguy.innerHTML=birthlist[0].Name;
        }
    }
      else if (x+1==birthlist.length){
        birthdate.innerHTML=(new Date((currentyr+1)+"-"+birthlist[0].Date)-new Date(currentyr+"-"+today))/(24*3600*1000);
        birthguy.innerHTML=birthlist[0].Name;
      } 
    }
}
function startClocks() {
	window.arrOffsets = 0;
		timezone = parseInt(8);
		if (!isNaN(timezone)) {
			var tzDifference = timezone * 60 + (new Date()).getTimezoneOffset();
			var offset = tzDifference * 60 * 1000;
			window.arrOffsets=offset;
	}
	updateClocks();
	setInterval(updateClocks, 1000);
}

setTimeout(startClocks, 100);