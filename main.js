var menuToggle = document.getElementById("menuToggle");
var navBar = document.getElementById("navBar");

menuToggle.addEventListener("click", ()=>{
    if (navBar.style.display == "none") {
        navBar.style.display = "flex";
        navBar.style.flexDirection = "column-reverse";
        navBar.style.width = "100%";
    }
    else{
        navBar.style.display = "none";
    }
});
if (window.width > 1024) {
    navBar.style.display = "inline";
}
