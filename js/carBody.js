var CarBody = (function () {
    function CarBody() {
    }

    CarBody.prototype.draw = function (pContext) {
        var grad = pContext.createLinearGradient(0, 30, 0, -25);
        grad.addColorStop(0, '#545454');
        grad.addColorStop(1, '#ffffff');

        pContext.beginPath();
        pContext.lineWidth = 0.01;
        pContext.fillStyle = grad;
        pContext.lineTo(50, -10);
        pContext.lineTo(100, -10);
        pContext.lineTo(200, 10);
        pContext.lineTo(190, 25);
        pContext.lineTo(15, 25);
        pContext.lineTo(10, 25);
        pContext.lineTo(0, 0);
        pContext.closePath();
        pContext.fill();
        pContext.stroke();
    };
    return CarBody;
}());