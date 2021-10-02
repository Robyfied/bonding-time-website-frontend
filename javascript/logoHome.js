var logo = document.getElementById("nav-logo"),
    navbar = document.getElementById("navcontainer"),
    scrollMax = 170,
    initialLogoSize = logo.offsetHeight,
    logoSize = initialLogoSize,
    scrollPos,
    classesChanged = false,
    isLogoAnimated = true,
    logoTop = 0;

logo.classList.remove("nav-logo_hover");

//gets rid of javascript if width is under 1150 px

if (window.matchMedia("(max-width: 1051px)").matches) {
    isLogoAnimated = false;
    logo.classList.remove("nav-logo_scaling");
}

window.addEventListener("resize", function (event) {
    if (window.matchMedia("(max-width: 1051px)").matches) {
        logo.classList.remove("nav-logo_scaling");
        isLogoAnimated = false;
        logo.setAttribute("style", " ");
    }
    else {
        isLogoAnimated = true;
        logo.classList.add("nav-logo_scaling");
    }
});

//logo animation
window.addEventListener("scroll", function (event) {
    if (isLogoAnimated) {
        scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
        logoSize = initialLogoSize - scrollPos / 1.1;
        logoTop = 25 - scrollPos / 4;
        if (logoTop < 0)
            logoTop = 0;
        if (logoSize < 120)
            logoSize = 120;
        logo.style.height = String(logoSize) + "px";
        logo.style.top = String(logoTop) + "px";

        if (scrollPos <= scrollMax) {
            logo.style.removeProperty("transition");
            logo.classList.remove("nav-logo_hover");
            classesChanged = false;
            navbar.style.boxShadow = "0 0 0 0 rgba(0, 0, 0, 0)";
            logo.style.boxShadow = "0 0 0 0 rgba(0, 0, 0, 0)";
        } else {
            if (!classesChanged) {
                logo.classList.replace("nav-logo", "nav-logo_hover");
                logo.classList.add("nav-logo");
                logo.style.transition = "all ease-in-out 0.8s";
            }
            navbar.style.boxShadow = "0 -2px 30px rgba(44, 26, 23, 0.5)";
            logo.style.boxShadow = "0 -2px 10px -10px rgba(44, 26, 23, 0.7)";
            classesChanged = true;
        }
    }
});