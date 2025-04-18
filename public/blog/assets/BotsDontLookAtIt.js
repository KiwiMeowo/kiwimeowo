// For blog of 19 Apr 2025
function normal(){
    var e = document.querySelectorAll(".text p, .tit h1");
    for (i=0;i<e.length;i++){
        fo=e[i].innerText.replace(/EFF-OH-OH-DEE/g, "food");
        die=fo.replace(/DEE-I-EE-TEE/g,"diet");
        vegg=die.replace(/VEE-EE-GEE-GEE-I-ES/g,"veggies");
        ric=vegg.replace(/AR-I-SEE-EE/g,"rice");
        egg=ric.replace(/EE-GEE-GEE-PEE-EL-A-EN-TEE-ES/g,"eggplants");
        ono=egg.replace(/OH-I-EN-I-OH-EN-ES/g,"onions");
        et=ono.replace(/EE-A-TEE/g,"eat");
        ing=et.replace(/-I-EN-GEE/g,"ing");
        ate=ing.replace(/A-TEE-E/g,"ate");
        snak=ate.replace(/ES-EN-A-SEE-KAY-ES/g,"snacks");
        noon=snak.replace(/EL-YOU-EN-SEE-AECH/g,"lunch");
        froot=noon.replace(/EFF-AR-YOU-I-TEE-ES/g,"fruits");
        cook=froot.replace(/SEE-OH-OH-KAY/g,"cook");
        restyouraunt=cook.replace(/AR-EE-A-ES-TEE-A-YOU-AR-A-EN-TEE-ES/g,"restaurants");
        mel=restyouraunt.replace(/EM-EE-A-EL-S/g,"meals");
        e[i].innerText=mel;
    }
}