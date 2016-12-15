var SunDown = (function () {
    function SunDown() {
    }

    SunDown.prototype.draw = function (pContext) {
        var grad = pContext.createLinearGradient(0, 30, 0, -50);
        grad.addColorStop(0, '#ba0343');
        grad.addColorStop(0.5, '#e89b20');
        grad.addColorStop(1, '#ffff56');

        pContext.beginPath();
        pContext.lineWidth = 0.01;
        pContext.fillStyle = grad;
        pContext.arc(0, 0, 50, 0, 2 * Math.PI);
        pContext.closePath();
        pContext.fill();
        pContext.stroke();
    };
    return SunDown;
}());