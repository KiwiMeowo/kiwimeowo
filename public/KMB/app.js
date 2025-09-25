var tcontent = document.getElementById("route");
var stops = document.getElementById('stops');
var saved = document.getElementById('saved');
function getRouteInfo(){
  if(window.navigator.onLine){
fetch('https://data.etabus.gov.hk/v1/transport/kmb/route/')
      .then((response) => response.json())
      .then((html)=>{
        tcontent.innerHTML='';
        html.data.forEach(loadRoutes);
      })
    } else{
      tcontent.innerHTML='You are offline!';
    }
}
function loadRoutes(item) {
  var row = document.createElement("div");
  row.setAttribute('data-route',item.route);
  if(item.bound=='O'){
    row.setAttribute('data-bound','outbound');
  } else if (item.bound=='I'){
    row.setAttribute('data-bound','inbound');
  }
  row.setAttribute('data-service',item.service_type);
  row.setAttribute('id',item.route);

  var routeCell = document.createElement("div");
  routeCell.innerHTML = `${item.route} <span>(${item.service_type})</span>`;

  var originCell = document.createElement("div");
  originCell.innerHTML = `<div>From: ${item.orig_en}</div><div>To: ${item.dest_en}</div>`;
  originCell.setAttribute('onclick','getStops("'+row.getAttribute("data-route")+'", "'+row.getAttribute("data-bound")+'", '+row.getAttribute("data-service")+')');

  var saveCell = document.createElement("div");
  saveCell.innerHTML="<span>★</span>";
  saveCell.setAttribute('onclick','saveStop("'+row.getAttribute("data-route")+'", "'+row.getAttribute("data-bound")+'", '+row.getAttribute("data-service")+')');

  var bottomflex=document.createElement("div");
  row.appendChild(routeCell);
  bottomflex.appendChild(originCell);
  bottomflex.appendChild(saveCell);
  row.appendChild(bottomflex);
  tcontent.appendChild(row);
}
function getStops(route,bound,service){
  document.getElementById('infocontainer').classList.add('active');
  document.getElementById('refresh2').setAttribute('onclick','getStops("'+route+'", "'+bound+'", '+service+')')
  document.body.style.overflow='hidden';
  fetch('https://data.etabus.gov.hk/v1/transport/kmb/route-stop/'+route+'/'+bound+'/'+service)
        .then((response) => response.json())
        .then((html)=>{
          stops.innerHTML='';
          html.data.forEach((stopnum)=>getStopName(stopnum.stop,route,bound,service));
        })
  }

function getStopName(stopid,route,bound,service){
  var row = document.createElement("div");
  stops.appendChild(row);
  fetch(('https://data.etabus.gov.hk/v1/transport/kmb/stop/'+stopid))
  .then((response) => response.json())
  .then((html)=>{
        var routeCell = document.createElement("div");
        row.appendChild(routeCell);
        routeCell.innerHTML = html.data.name_en;
        var timeCell = document.createElement("div");
        row.appendChild(timeCell);
        fetch('https://data.etabus.gov.hk/v1/transport/kmb/eta/'+stopid+'/'+route+'/'+service)
        .then((res) => res.json())
        .then((e)=>{
          for (x=0;x<e.data.length;x++){
            if (e.data[x].dir=="O"&&bound=="outbound" ||e.data[x].dir=="I"&&bound=="inbound"){
              if (e.data[x].eta!=null){
                let date=new Date(e.data[x].eta).getTime();
                let now=new Date().getTime();
                var distance = date - now;
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                if (minutes<=0){
                  timeCell.innerHTML += '<div>- Bus coming!</div>';
                }else{
                  timeCell.innerHTML += `<div>- ${minutes} minute(s) left</div>`;
                }
              } else{
                timeCell.innerHTML += '<div>No upcoming buses</div>';
                break
              }
            } 
          }
        })
  })
}

function saveStop(route,bound,service){
  savedList=localStorage.getItem("saved");
  if (savedList==undefined||savedList==null||savedList==''){
    savedList=route+","+bound+","+service;
  } else if (savedList.split("+").includes(route+","+bound+","+service)!=true){
    savedList+="+"+route+","+bound+","+service;
  }
  localStorage.setItem("saved", savedList);
  console.log(localStorage.getItem("saved"))
}
function getSaved(){
  document.getElementById('savedcontainer').classList.add('active');
  savedList=localStorage.getItem("saved");
  saved.innerHTML='';
  eachroute=savedList.split("+");
  if (savedList!=undefined||savedList!=null||savedList!=''){
    for(x=0;x < eachroute.length;x++){
      routeinfo=eachroute[x].split(",");
    fetch('https://data.etabus.gov.hk/v1/transport/kmb/route/'+routeinfo[0]+'/'+routeinfo[1]+'/'+routeinfo[2])
      .then((response) => response.json())
      .then((html)=>{
        var row = document.createElement('div');
  row.setAttribute('data-route',html.data.route);
  if(html.data.bound=='O'){
    row.setAttribute('data-bound','outbound');
  } else if (html.data.bound=='I'){
    row.setAttribute('data-bound','inbound');
  }
  row.setAttribute('data-service',html.data.service_type);

  var routeCell = document.createElement('div');
  routeCell.innerHTML = `${html.data.route} <span>(${html.data.service_type})</span>`;

  var originCell = document.createElement('div');
  originCell.innerHTML = `<div>From: ${html.data.orig_en}</div><div>To: ${html.data.dest_en}</div>`;
  originCell.setAttribute('onclick','getStops("'+row.getAttribute("data-route")+'", "'+row.getAttribute("data-bound")+'", '+row.getAttribute("data-service")+')');

  var deleteCell = document.createElement('div');
  deleteCell.innerHTML="<span>Del</span>";
  deleteCell.setAttribute('onclick','deleteStop(this,"'+row.getAttribute("data-route")+'", "'+row.getAttribute("data-bound")+'", '+row.getAttribute("data-service")+')');

  var bottomflex=document.createElement("div");
  row.appendChild(routeCell);
  bottomflex.appendChild(originCell);
  bottomflex.appendChild(deleteCell);
  row.appendChild(bottomflex);
  saved.appendChild(row);
      })
    }
  }
}
function deleteStop(cell,route,bound,service){
  savedList=localStorage.getItem("saved");
  eachroute=savedList.split("+");
  const ind = eachroute.indexOf(route+','+bound+','+service);
  if (ind > -1) {
    eachroute.splice(ind, 1);
  }
  localStorage.setItem("saved", eachroute.join('+'));
  cell.parentNode.remove();
}
function ClearAll(){
  localStorage.setItem("saved", '');
  saved.innerHTML='';
}
function Return(box){
  document.getElementById(box).classList.remove('active');
  if (document.getElementById('infocontainer').classList.contains('active')!=true&&document.getElementById('savedcontainer').classList.contains('active')!=true){
    document.body.style.overflow='auto'
  }
}
document.addEventListener('keypress',function(){
  if (event.key === 'Enter') {
  document.getElementById(document.getElementById('input').value.toUpperCase()).scrollIntoView({
      behavior: 'auto',
      block: 'center',
      inline: 'center'
  });
}
})
getRouteInfo();