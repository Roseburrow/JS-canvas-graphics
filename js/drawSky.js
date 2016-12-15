/*jslint maxlen:200 */
/*global Vector */
/*global Matrix */
/*global SceneGraphNode*/
/*global Sky*/
var DrawSky = (function () {
    function DrawSky(pX, pY, pScale, pAngle) {
        this.setX(pX);
        this.setY(pY);
        this.setScale(pScale);
        this.setAngle(pAngle);
    }
    DrawSky.prototype.getX = function () {
        return this.mX;
    };
    DrawSky.prototype.getY = function () {
        return this.mY;
    };
    DrawSky.prototype.setX = function (pX) {
        this.mX = pX;
    };
    DrawSky.prototype.setY = function (pY) {
        this.mY = pY;
    };
    DrawSky.prototype.getScale = function () {
        return this.mScale;
    };
    DrawSky.prototype.setScale = function (pScale) {
        this.mScale = pScale;
    };
    DrawSky.prototype.getAngle = function () {
        return this.mAngle;
    };
    DrawSky.prototype.setAngle = function (pAngle) {
        this.mAngle = pAngle;
    };

    //sets the position of the sun.
    DrawSky.prototype.draw = function (pContext, worldMatrix) {
        var rootNode, translateNode, scaleNode, rotateNode, skyTranslationNode;

        //Required Nodes
        rootNode = new SceneGraphNode(worldMatrix);
        translateNode = new SceneGraphNode(new Matrix.createTranslation(new Vector(this.mX, this.mY)));
        scaleNode = new SceneGraphNode(new Matrix.createScale(new Vector(this.mScale, this.mScale)));
        rotateNode = new SceneGraphNode(new Matrix.createRotation(this.mAngle));

        skyTranslationNode = new SceneGraphNode(new Matrix.createTranslation(new Vector(0, 0)));

        //Create graph...
        skyTranslationNode.addChild(new Sky());

        rootNode.addChild(translateNode);
        translateNode.addChild(scaleNode);
        scaleNode.addChild(rotateNode);
        rotateNode.addChild(skyTranslationNode);

        //Draw graph...
        rootNode.draw(pContext, worldMatrix);
    };
    DrawSky.prototype.update = function () {

    };
    return DrawSky;
}());