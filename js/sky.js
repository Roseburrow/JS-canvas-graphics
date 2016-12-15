var Sky = (function () {
    function Sky() {
    }
    Sky.prototype.draw = function (pContext) {
        var grad = pContext.createRadialGradient(400, 140, 50, 400, 150, 500);
        grad.addColorStop(0, '#ffff56');
        grad.addColorStop(0.25, '#532D6B');
        grad.addColorStop(1, '#240D33');

        pContext.beginPath();
        pContext.lineWidth = 0.01;
        pContext.fillStyle = grad;
        pContext.rect(0, 0, 800, 700);
        pContext.closePath();
        pContext.fill();
        pContext.stroke();
    };
    return Sky;
}());