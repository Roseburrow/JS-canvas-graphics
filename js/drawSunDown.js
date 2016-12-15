/*jslint maxlen:200 */
/*global Vector */
/*global Matrix */
/*global SceneGraphNode*/
/*global SunDown*/
var DrawSunDown = (function () {
    function DrawSunDown(pX, pY, pScale, pAngle) {
        this.setX(pX);
        this.setY(pY);
        this.setScale(pScale);
        this.setAngle(pAngle);
    }
    DrawSunDown.prototype.getX = function () {
        return this.mX;
    };
    DrawSunDown.prototype.getY = function () {
        return this.mY;
    };
    DrawSunDown.prototype.setX = function (pX) {
        this.mX = pX;
    };
    DrawSunDown.prototype.setY = function (pY) {
        this.mY = pY;
    };
    DrawSunDown.prototype.getScale = function () {
        return this.mScale;
    };
    DrawSunDown.prototype.setScale = function (pScale) {
        this.mScale = pScale;
    };
    DrawSunDown.prototype.getAngle = function () {
        return this.mAngle;
    };
    DrawSunDown.prototype.setAngle = function (pAngle) {
        this.mAngle = pAngle;
    };

    //sets the position of the sun.
    DrawSunDown.prototype.draw = function (pContext, worldMatrix) {
        var rootNode, translateNode, scaleNode, rotateNode, sunTranslationNode;

        //Required Nodes
        rootNode = new SceneGraphNode(worldMatrix);
        translateNode = new SceneGraphNode(new Matrix.createTranslation(new Vector(this.mX, this.mY)));
        scaleNode = new SceneGraphNode(new Matrix.createScale(new Vector(this.mScale, this.mScale)));
        rotateNode = new SceneGraphNode(new Matrix.createRotation(this.mAngle));

        sunTranslationNode = new SceneGraphNode(new Matrix.createTranslation(new Vector(0, 0)));

        //Create graph...
        sunTranslationNode.addChild(new SunDown());

        rootNode.addChild(translateNode);
        translateNode.addChild(scaleNode);
        scaleNode.addChild(rotateNode);
        rotateNode.addChild(sunTranslationNode);

        //Draw graph...
        rootNode.draw(pContext, worldMatrix);
    };
    DrawSunDown.prototype.update = function () {
    };
    return DrawSunDown;
}());