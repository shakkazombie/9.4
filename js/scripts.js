// scripts.js 

function drawTree(x) {
    for (var i = 1; i <= x; i++) {
        star = "";
        for (var j = x; j > x; j--) {
            star += " ";
        }
        for (j = 1; j <= i * 2 - 1; j++) {
            star += "*";

        }
        document.write(star + "<br/>");
    }
}

drawTree(10);