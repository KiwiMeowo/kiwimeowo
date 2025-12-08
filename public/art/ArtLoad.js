drawings.reverse();
for (x=Math.ceil(drawings.length/18)-1;x>=0;x--){
  var page=document.createElement('div');
    page.classList.add('row');
    page.setAttribute("id",x+1)
    for(y=17;y>=0;y--){
      if (drawings[y+18*x]==undefined){
        continue;
      } else{
        var col=document.createElement("div");
        col.classList.add("col")
        if (drawings[y+18*x].Album!=""){
          var button = document.createElement("a");
          button.setAttribute("href",drawings[y+18*x].Album)
        } else{
          var button=document.createElement("button");
        }
        button.classList.add("artborder");
        var img = document.createElement("img");
        img.setAttribute("loading",'lazy');
        link=drawings[y+18*x].Link.replace("dl=0", "raw=1");
        img.setAttribute("src",link);
        date=link.split("_");
        date=date[date.length-1];
        date=date.split(".")[0];
        if(date.split("-")[2]!=undefined){
          date=`${date.split("-")[2]} ${date.split("-")[1]} 2026`
          img.setAttribute("title",drawings[y+18*x].Comment+" ("+date+")");
        }else{
          img.setAttribute("title",drawings[y+18*x].Comment);
        }
        button.append(img);
        if (drawings[y+18*x].Style!=""){
          img.setAttribute("style",drawings[y+18*x].Style);
        }
        if (drawings[y+18*x].Censor==true){
          button.classList.add("censor");
        }
        col.append(button);
        page.append(col);
      }
    }
  document.getElementById("fra").append(page);
}

// for (x=0;x<Math.ceil(drawings.length/18);x++){
//   var page=document.createElement('div');
//     page.classList.add('row');
//     page.setAttribute("id",Math.ceil(drawings.length/18)-x)
//     for(y=17;y>=0;y--){
//       console.log(18*x-y,"+",x+1)
//       if (drawings[18*x-y]==undefined){
//         continue;
//       } else{
//         var col=document.createElement("div");
//         col.classList.add("col")
//         var button = document.createElement("button");
//         button.classList.add("artborder");
//         var img = document.createElement("img");
//         img.setAttribute("loading",'lazy');
//         img.setAttribute("src",drawings[18*x-y].Link);
//         img.setAttribute("title",drawings[18*x-y].Comment,"( ",drawings[18*x-y].Comment," )");
//         button.append(img);
//         col.append(button);
//         page.append(col);
//       }
//     }
//   document.getElementById("fra").append(page);
// }