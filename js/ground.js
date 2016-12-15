var Ground = (function () {
    function Ground() {
    }
    Ground.prototype.draw = function (pContext) {
        var grad = pContext.createLinearGradient(0, 700, 0, 300);
        grad.addColorStop(0, '#000000');
        grad.addColorStop(1, '#545454');

        pContext.beginPath();
        pContext.lineWidth = 0.01;
        pContext.fillStyle = grad;
        pContext.rect(0, 600, 800, 100);
        pContext.closePath();
        pContext.fill();
        pContext.stroke();
    };
    return Ground;
}());