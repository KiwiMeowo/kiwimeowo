var title=window.location.href.split("/");
fetch("index.html", {cache: "no-store"})
  .then((response) => {
    return response.text();
  })
  .then((html) => {
    var parser = new DOMParser();
    var doc = parser.parseFromString(html, "text/html");
    var fic = doc.getElementById(title[title.length-1].replace(".html",""));
    var tags = fic.getElementsByClassName("tags")[0].innerHTML;
    document.getElementsByClassName("tags")[0].innerHTML=tags;
    var date = fic.getElementsByClassName("date")[0].innerHTML;
    document.getElementsByClassName("date")[0].innerHTML=date;
  })
  .catch(error => {
     document.getElementById("new3").innerHTML = "error";
  });