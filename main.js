let i = 1;

function action(panah) {
    document.getElementById("img-" + i).style.display = "none";

    if (panah === "left") {
        i--;
        if (i <=0) {
            i = 3;
        }
    }
    else if (panah === "right") {
        i++;
        if (i > 3) {
            i = 1;
        }
    }
    document.getElementById("img-" + i).style.display = "flex";
}