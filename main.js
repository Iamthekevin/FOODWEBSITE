
let nav = document.getElementById("navbar")
window.onscroll = function () {
    if(document.documentElement.scrollTop  > 20){
        nav.classList.add("navbar-my");
        nav.style.boxShadow="0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)";
    }else{
        nav.classList.remove("navbar-my");
        nav.style.boxShadow="unset";
    }
}