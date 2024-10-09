function hamburgerShop() {
    var x = document.getElementById("myLinks");
    var y = document.getElementById("spacer");
    var z = document.getElementById("filter");
    var w = document.getElementById("filter-background");
    if (x.style.display === "flex") {
        x.style.display = "none";
        y.style.height = "160px";
        z.style.top = "120px";
        w.style.top = "120px";
    } else {
        x.style.display = "flex";
        y.style.height = "212px";
        z.style.top = "172px";
        w.style.top = "172px";
    }
}

function hamburgerContact() {
    var x = document.getElementById("myLinks");
    var y = document.getElementById("spacerContact");
    if (x.style.display === "flex") {
        x.style.display = "none";
        y.style.height = "120px";
    } else {
        x.style.display = "flex";
        y.style.height = "182px";
    }
}

