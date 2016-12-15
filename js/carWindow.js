var CarWindow = (function () {
    function CarWindow() {
    }

    CarWindow.prototype.draw = function (pContext) {
        var grad = pContext.createLinearGradient(0, 15, 0, 25);
        grad.addColorStop(0, '#96f2ec');
        grad.addColorStop(1, '#ffffff');

        pContext.beginPath();
        pContext.lineWidth = 0.01;
        pContext.fillStyle = grad;
        pContext.lineTo(25, 0);
        pContext.lineTo(50, 5);
        pContext.lineTo(50, 8);
        pContext.lineTo(10, 8);
        pContext.lineTo(0, 0);
        pContext.closePath();
        pContext.fill();
        pContext.stroke();
    };
    return CarWindow;
}());