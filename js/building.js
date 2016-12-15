var Building = (function () {
    function Building(pColour1, pColour2) {
        this.setColours(pColour1, pColour2);
    }
    Building.prototype.setColours = function (pColour1, pColour2) {
        this.mColour1 = pColour1;
        this.mColour2 = pColour2;
    };
    Building.prototype.draw = function (pContext) {
        var grad = pContext.createLinearGradient(0, 250, 125, 40);
        grad.addColorStop(0, this.mColour1);
        grad.addColorStop(1, this.mColour2);

        pContext.beginPath();
        pContext.lineWidth = 0.01;
        pContext.fillStyle = grad;
        pContext.rect(0, 0, 50, 200);
        pContext.closePath();
        pContext.fill();
        pContext.stroke();
    };
    return Building;
}());