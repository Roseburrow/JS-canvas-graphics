/*jslint maxlen:200 */
/*global Vector */
/*global Matrix */
/*global SceneGraphNode*/
/*global Ground*/
var DrawGround = (function () {
    function DrawGround(pX, pY, pScale, pAngle) {
        this.setX(pX);
        this.setY(pY);
        this.setScale(pScale);
        this.setAngle(pAngle);
    }
    DrawGround.prototype.getX = function () {
        return this.mX;
    };
    DrawGround.prototype.getY = function () {
        return this.mY;
    };
    DrawGround.prototype.setX = function (pX) {
        this.mX = pX;
    };
    DrawGround.prototype.setY = function (pY) {
        this.mY = pY;
    };
    DrawGround.prototype.getScale = function () {
        return this.mScale;
    };
    DrawGround.prototype.setScale = function (pScale) {
        this.mScale = pScale;
    };
    DrawGround.prototype.getAngle = function () {
        return this.mAngle;
    };
    DrawGround.prototype.setAngle = function (pAngle) {
        this.mAngle = pAngle;
    };

    //sets the position of the sun.
    DrawGround.prototype.draw = function (pContext, worldMatrix) {
        var rootNode, translateNode, scaleNode, rotateNode, groundTranslationNode;

        //Required Nodes
        rootNode = new SceneGraphNode(worldMatrix);
        translateNode = new SceneGraphNode(new Matrix.createTranslation(new Vector(this.mX, this.mY)));
        scaleNode = new SceneGraphNode(new Matrix.createScale(new Vector(this.mScale, this.mScale)));
        rotateNode = new SceneGraphNode(new Matrix.createRotation(this.mAngle));

        groundTranslationNode = new SceneGraphNode(new Matrix.createTranslation(new Vector(0, 0)));

        //Create graph...
        groundTranslationNode.addChild(new Ground());

        rootNode.addChild(translateNode);
        translateNode.addChild(scaleNode);
        scaleNode.addChild(rotateNode);
        rotateNode.addChild(groundTranslationNode);

        //Draw graph...
        rootNode.draw(pContext, worldMatrix);
    };
    DrawGround.prototype.update = function () {

    };
    return DrawGround;
}());