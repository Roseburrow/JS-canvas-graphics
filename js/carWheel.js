var CarWheel = (function () {
    function CarWheel() {
    }

    CarWheel.prototype.draw = function (pContext) {
        var grad = pContext.createLinearGradient(0, 30, 0, -50);
        grad.addColorStop(0, '#545454');
        grad.addColorStop(1, '#000000');

        pContext.beginPath();
        pContext.lineWidth = 0.01;
        pContext.fillStyle = grad;
        pContext.arc(0, 0, 25, 0, 2 * Math.PI);
        pContext.closePath();
        pContext.fill();
        pContext.stroke();
    };
    return CarWheel;
}());