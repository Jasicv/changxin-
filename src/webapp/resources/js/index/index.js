window.onload = function () {
    lun();
}
// 轮播
function lun() {
    mainDivImg = document.getElementById("main-div-img");
    var mainUlLiBut1 = document.getElementById("main-ul-li-but1");
    mainUlLiBut1.style.backgroundColor = "#409EFF";
    mv = 0;
    // 定时轮播
    var timming = setInterval(function () {
        timm();
        cli();
    },3000);
}
function timm() {
    mv = mv - 1920
    mainDivImg.style.left = mv + "px";
    if (mv < -1920) {
        mv = 0;
        console.log(mv);
        mainDivImg.style.left = mv + "px";
    }
}
function cli() {
    var mainUlLiBut1 = document.getElementById("main-ul-li-but1");
    var mainUlLiBut2 = document.getElementById("main-ul-li-but2");
    if(mv == 0){
        mainUlLiBut1.style.backgroundColor = "#409EFF";
        mainUlLiBut2.style.backgroundColor = "#fff";
    }else if (mv == -1920){
        mainUlLiBut1.style.backgroundColor = "#fff";
        mainUlLiBut2.style.backgroundColor = "#409EFF";
    }
}
function but1Over() {
    var mainUlLiBut1 = document.getElementById("main-ul-li-but1");
    var mainUlLiBut2 = document.getElementById("main-ul-li-but2");
    mv = 0;
    mainDivImg.style.left = mv + "px";
    mainUlLiBut1.style.backgroundColor = "#409EFF";
    mainUlLiBut2.style.backgroundColor = "#fff";
}
function but2Over() {
    var mainUlLiBut1 = document.getElementById("main-ul-li-but1");
    var mainUlLiBut2 = document.getElementById("main-ul-li-but2");
    mv = -1920;
    mainDivImg.style.left = mv + "px";
    mainUlLiBut1.style.backgroundColor = "#fff";
    mainUlLiBut2.style.backgroundColor = "#409EFF";
}
// 登录
function log() {
    window.location.href = "/login/";
}
// 注册
function reg() {
    window.location.href = "/register";
}
