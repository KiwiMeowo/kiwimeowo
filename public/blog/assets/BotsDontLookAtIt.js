// For blog of 19 Apr 2025
function normal(){
    var weird = document.getElementsByClassName("weird");
    for (i=0;i<weird.length;i++){
        weird[i].innerText=weird[i].innerText.replace(/\bAY\b/g, "A");
        weird[i].innerText=weird[i].innerText.replace(/BEE/g, "B");
        weird[i].innerText=weird[i].innerText.replace(/SEE/g, "C");
        weird[i].innerText=weird[i].innerText.replace(/DEE/g, "D");
        weird[i].innerText=weird[i].innerText.replace(/\bEE\b/g, "E");
        weird[i].innerText=weird[i].innerText.replace(/EFF/g, "F");
        weird[i].innerText=weird[i].innerText.replace(/GEE/g, "G");
        weird[i].innerText=weird[i].innerText.replace(/AECH/g, "H");
        weird[i].innerText=weird[i].innerText.replace(/IYE/g, "I");
        weird[i].innerText=weird[i].innerText.replace(/JAY/g, "J");
        weird[i].innerText=weird[i].innerText.replace(/KAY/g, "K");
        weird[i].innerText=weird[i].innerText.replace(/EL/g, "L");
        weird[i].innerText=weird[i].innerText.replace(/EM/g, "M");
        weird[i].innerText=weird[i].innerText.replace(/EN/g, "N");
        weird[i].innerText=weird[i].innerText.replace(/OH/g, "O");
        weird[i].innerText=weird[i].innerText.replace(/PEE/g, "P");
        weird[i].innerText=weird[i].innerText.replace(/KYU/g, "Q");
        weird[i].innerText=weird[i].innerText.replace(/AR/g, "R");
        weird[i].innerText=weird[i].innerText.replace(/ES/g, "S");
        weird[i].innerText=weird[i].innerText.replace(/TEE/g, "T");
        weird[i].innerText=weird[i].innerText.replace(/YOU/g, "U");
        weird[i].innerText=weird[i].innerText.replace(/VEE/g, "V");
        weird[i].innerText=weird[i].innerText.replace(/DOUBLEU/g, "W");
        weird[i].innerText=weird[i].innerText.replace(/EKS/g, "X");
        weird[i].innerText=weird[i].innerText.replace(/WHY/g, "Y");
        weird[i].innerText=weird[i].innerText.replace(/ZEE/g, "Z");
        weird[i].innerText=weird[i].innerText.replace(/-/g, "");
        weird[i].innerText=weird[i].innerText.toLowerCase();
    }
}