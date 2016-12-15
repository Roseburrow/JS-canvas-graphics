var RoadLine = (function () {
    function RoadLine() {
    }
    RoadLine.prototype.draw = function (pContext) {
        var grad = pContext.createLinearGradient(0, 0, 120, 150);
        grad.addColorStop(0, 'grey');
        grad.addColorStop(1, 'white');

        pContext.beginPath();
        pContext.lineWidth = 0.01;
        pContext.fillStyle = grad;
        pContext.rect(0, 0, 70, 10);
        pContext.closePath();
        pContext.fill();
        pContext.stroke();
    };
    return RoadLine;
}());