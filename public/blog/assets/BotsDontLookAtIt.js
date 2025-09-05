// For blog of 19 Apr 2025
function normal(){
    var food = document.querySelectorAll(".food");
    for (i=0;i<food.length;i++){
        food[i].innerText=food[i].innerText.replace(/\bAY\b/g, "A");
        food[i].innerText=food[i].innerText.replace(/BEE/g, "B");
        food[i].innerText=food[i].innerText.replace(/SEE/g, "C");
        food[i].innerText=food[i].innerText.replace(/DEE/g, "D");
        food[i].innerText=food[i].innerText.replace(/\bEE\b/g, "E");
        food[i].innerText=food[i].innerText.replace(/EFF/g, "F");
        food[i].innerText=food[i].innerText.replace(/GEE/g, "G");
        food[i].innerText=food[i].innerText.replace(/AECH/g, "H");
        food[i].innerText=food[i].innerText.replace(/IYE/g, "I");
        food[i].innerText=food[i].innerText.replace(/JAY/g, "J");
        food[i].innerText=food[i].innerText.replace(/KAY/g, "K");
        food[i].innerText=food[i].innerText.replace(/EL/g, "L");
        food[i].innerText=food[i].innerText.replace(/EM/g, "M");
        food[i].innerText=food[i].innerText.replace(/EN/g, "N");
        food[i].innerText=food[i].innerText.replace(/OH/g, "O");
        food[i].innerText=food[i].innerText.replace(/PEE/g, "P");
        food[i].innerText=food[i].innerText.replace(/KYU/g, "Q");
        food[i].innerText=food[i].innerText.replace(/AR/g, "R");
        food[i].innerText=food[i].innerText.replace(/ES/g, "S");
        food[i].innerText=food[i].innerText.replace(/TEE/g, "T");
        food[i].innerText=food[i].innerText.replace(/YOU/g, "U");
        food[i].innerText=food[i].innerText.replace(/VEE/g, "V");
        food[i].innerText=food[i].innerText.replace(/DOUBLEU/g, "W");
        food[i].innerText=food[i].innerText.replace(/EKS/g, "X");
        food[i].innerText=food[i].innerText.replace(/WHY/g, "Y");
        food[i].innerText=food[i].innerText.replace(/ZEE/g, "Z");
        food[i].innerText=food[i].innerText.replace(/-/g, "");
        food[i].innerText=food[i].innerText.toLowerCase();
    }
}