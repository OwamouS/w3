
var hiddenForm = document.getElementById("hidden");
var ajaxButton = document.getElementById("form:commandButton");
var Ox = 200;
var Oy = 200;
var toPx = 50;
var graphic = document.getElementById("graphic");
var graphicContext = graphic.getContext("2d");
graphic.addEventListener("click", clickGraphic, false);
var hiddenY = document.getElementById("form:hiddenY");
var hiddenX = document.getElementById("form:hiddenX");
var Text = document.getElementById("form:text");
Text.addEventListener("blur", TextListener);

function TextListener() {
    hiddenY.value = Text.value;
}

function clickGraphic(e) {
    hiddenX.value = (e.clientX - graphic.offsetLeft - Ox) / toPx;
    hiddenY.value = (Oy - (e.clientY - graphic.offsetTop)) / toPx;
    var x = hiddenX.value;
    var y = hiddenY.value;
    var r = Math.floor(document.getElementById("form:slideEntry_hidden").value * 100) / 1000;
    var ch = x>=-r/2 && x<=0 && y<=0 && x*x+y*y<=r*r/4 || x>=0 && x<=r/2 && y<=r && y>=2*x-r;
    if (ch) {

        graphicContext.fillStyle = "#009900";
    }
    else {
        graphicContext.fillStyle = "#990000";
    }
    graphicContext.fillRect(toPx*x+Ox,Oy-toPx*y,3,3);
    ajaxButton.click();

    hiddenY.value = Text.value;
    hiddenX.value = 0;

}

draw();

function draw() {
    var R = Math.floor(document.getElementById("form:slideEntry_hidden").value * 100) / 1000;
    graphicContext.clearRect(0, 0, 400, 400);
    graphicContext.fillStyle = "#0600ff";
    graphicContext.strokeStyle = "#000";
    graphicContext.beginPath();
    graphicContext.moveTo(Ox, Oy);
    graphicContext.arc(Ox, Oy, R * toPx, 0, (Math.PI) * 1.5, true);
    graphicContext.closePath();
    graphicContext.stroke();
    graphicContext.fill();
    graphicContext.beginPath();
    graphicContext.moveTo(Ox - (R / 2) * toPx, Oy);
    graphicContext.lineTo(Ox, Oy + (R / 2) * toPx);
    graphicContext.moveTo(Ox - (R / 2) * toPx, Oy);
    graphicContext.lineTo(Ox, Oy);
    graphicContext.lineTo(Ox, Oy + (R / 2) * toPx);
    graphicContext.closePath();
    graphicContext.stroke();
    graphicContext.fill();
    graphicContext.beginPath();
    graphicContext.moveTo(Ox, Oy - (R / 2) * toPx);
    graphicContext.fillRect(Ox - R * toPx, Oy - (R / 2) * toPx, R * toPx, R / 2 * toPx);
    graphicContext.closePath();
    graphicContext.beginPath();
    graphicContext.moveTo(0, Oy);
    graphicContext.lineTo(400, Oy);
    graphicContext.lineTo(395, Oy - 5);
    graphicContext.moveTo(400, Oy);
    graphicContext.lineTo(395, Oy + 5);
    graphicContext.moveTo(Ox, 0);
    graphicContext.lineTo(Ox - 5, 5);
    graphicContext.moveTo(Ox, 0);
    graphicContext.lineTo(Ox + 5, 5);
    graphicContext.moveTo(Ox, 0);
    graphicContext.lineTo(Ox, 400);
    graphicContext.moveTo(Ox - 5, Oy - (R / 2) * toPx);
    graphicContext.lineTo(Ox + 5, Oy - (R / 2) * toPx);
    graphicContext.moveTo(Ox - 5, Oy + (R / 2) * toPx);
    graphicContext.lineTo(Ox + 5, Oy + (R / 2) * toPx);
    graphicContext.moveTo(Ox - 5, Oy - (R) * toPx);
    graphicContext.lineTo(Ox + 5, Oy - (R) * toPx);
    graphicContext.moveTo(Ox - 5, Oy + (R) * toPx);
    graphicContext.lineTo(Ox + 5, Oy + (R) * toPx);
    graphicContext.moveTo(Ox - (R / 2) * toPx, Oy + 5);
    graphicContext.lineTo(Ox - (R / 2) * toPx, Oy - 5);
    graphicContext.moveTo(Ox + (R / 2) * toPx, Oy + 5);
    graphicContext.lineTo(Ox + (R / 2) * toPx, Oy - 5);
    graphicContext.moveTo(Ox + (R) * toPx, Oy + 5);
    graphicContext.lineTo(Ox + (R) * toPx, Oy - 5);
    graphicContext.moveTo(Ox - (R) * toPx, Oy + 5);
    graphicContext.lineTo(Ox - (R) * toPx, Oy - 5);
    graphicContext.closePath();
    graphicContext.stroke();
    graphicContext.fillStyle = "#000";
    graphicContext.font = "bold 12px sans-serif ";
    graphicContext.fillText(R, Ox + 10, Oy - R * toPx);
    graphicContext.fillText(R/2, Ox + 10, Oy - (R / 2) * toPx);
    graphicContext.fillText(R, Ox + 10, Oy + R * toPx);
    graphicContext.fillText(R/2, Ox + 10, Oy + (R / 2) * toPx);
    graphicContext.fillText(R, Ox - R * toPx, Oy - 10);
    graphicContext.fillText(R/2, Ox - (R / 2) * toPx, Oy - 10);
    graphicContext.fillText(R, Ox + R * toPx, Oy - 10);
    graphicContext.fillText(R/2, Ox + (R / 2) * toPx, Oy - 10);
    graphicContext.fillText("x", 380, Oy - 5);
    graphicContext.fillText("y", Ox + 5, 10);
}
